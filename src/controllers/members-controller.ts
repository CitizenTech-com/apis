import { RequestHandler } from "express";
import stytchClient from "../stytchClient";
import { Member, LoginRequest } from "../types";
import { MEMBERS } from "../constants";

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    res.status(200).json({ members: MEMBERS });
  } catch (error) {
    res.status(500).json({ message: "Failed to get users", error });
  }
};

export const register: RequestHandler = async (req, res) => {
  const {
    email,
    password,
    fullName,
    address,
    phone,
    postCode,
    confirmPassword,
  }: Member = req.body;

  // Check if all fields are provided
  if (
    !email ||
    !password ||
    !fullName ||
    !address ||
    !phone ||
    !postCode ||
    !confirmPassword
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password and confirm password do not match",
    });
  }

  try {
    const first_name = fullName.split(" ")[0];
    const last_name = fullName.split(" ")[1];
    const stytchresponse = await stytchClient.passwords.create({
      name: {
        first_name,
        last_name,
      },
      email: email,
      password: password,
      session_duration_minutes: 527040,
    });

    if (stytchresponse.status_code === 200) {
      MEMBERS.push({
        email: email,
        password: password,
        fullName: fullName,
        address: address,
        phone: phone,
        postCode: postCode,
        confirmPassword: confirmPassword,
      });

      return res.status(201).json({
        success: true,
        message: "Added Successfully",
        session_duration: "366 days",
        session_token: stytchresponse.session_token,
        session_jwt: stytchresponse.session_jwt,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Unable to add", error });
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password }: LoginRequest = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const stytchresponse = await stytchClient.passwords.authenticate({
      email: email,
      password: password,
      session_duration_minutes: 527040,
    });

    if (stytchresponse.status_code === 200) {
      return res.status(201).json({
        success: true,
        message: "Logged In Successfully",
        session_duration: "366 days",
        session_token: stytchresponse.session_token,
        session_jwt: stytchresponse.session_jwt,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Unable to login", error });
  }
};
