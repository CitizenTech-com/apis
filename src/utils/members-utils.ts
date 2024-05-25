import { isEmpty } from "lodash";
import { Member } from "../awsAPIs";

export const getMemberFromRequest = (input: any): Member => {
  try {
    if (!isEmpty(input)) return input as Member;
    return null;
  } catch (error) {
    return null;
  }
};
