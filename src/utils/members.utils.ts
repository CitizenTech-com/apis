import { isEmpty } from "lodash";

export const getMemberFromRequest = (input: any) => {
  try {
    if (!isEmpty(input)) return input;
    return null;
  } catch (error) {
    return null;
  }
};
