import { Amplify } from "aws-amplify";
import { Member } from "../awsAPIs";
import { AWS_API_CONFIG } from "../constants";
import { generateClient } from "aws-amplify/api";
import {
  SignUpInput,
  confirmSignUp,
  resendSignUpCode,
  signUp,
} from "aws-amplify/auth";

Amplify.configure(AWS_API_CONFIG);

const awsClient = generateClient();

export const registerMember = async (member: Member): Promise<Member> => {
  if (member) {
    const signUpDetails: SignUpInput = {
      username: member.email,
      password: "Password@1",
      options: {
        autoSignIn: true,
        userAttributes: {
          email: member.email,
          name: member.name,
        },
      },
    };
    const memberSignUpDetails = await signUp(signUpDetails);
    memberSignUpDetails.isSignUpComplete = true;
    const some = await resendSignUpCode({ username: member.email });

    return Promise.resolve(member);
  }
  return Promise.reject(new Error("Member cannot be registered"));
};
