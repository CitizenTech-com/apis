import { RequestHandler } from "express";
import stytchClient from "../stytchClient";
import { Name } from "stytch";
import { User, LoginRequest } from "../types";

export const signUp: RequestHandler = async (req, res) => {
  const {  email, password}: User = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
  }

  try {
    const stytchresponse = await stytchClient.passwords.create({
      email: email,
      password: password,
      session_duration_minutes: 527040,
    });

    if (stytchresponse.status_code === 200) {
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
      .json({ success: false, data: null, message: "Unable to add", error });
  }
};

export const login: RequestHandler = async (req, res) => {
  const { email, password }: LoginRequest = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "All fields are required" });
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
      .json({ success: false, data: null, message: "Unable to login", error });
  }
};
