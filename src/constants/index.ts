import { ResourcesConfig } from "aws-amplify";

export enum MembersRoutes {
  REGISTER_USER = "/register",
  GET_ALL_USERS = "/",
}

export const AWS_API_CONFIG: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: "eu-west-2_7tQGZkrBW",
      userPoolClientId: "71hu2ik70sm6jv1dq11fbh2dut",
      identityPoolId: "eu-west-2:7c736c4a-0424-4e9c-a52b-67b36cd017b8",
    },
  },
  API: {
    GraphQL: {
      endpoint:
        "https://ek2zrgoyavg7hi3dibdqh72tji.appsync-api.eu-west-2.amazonaws.com/graphql",
      region: "eu-west-2",
      defaultAuthMode: "apiKey",
      apiKey: "da2-jncqoydez5djbkoqlwpizbxmfa",
    },
  },
};
