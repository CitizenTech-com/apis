import { Member } from "../awsAPIs";

export const registerMember = async (member: Member): Promise<Member> => {
  return Promise.resolve(member);
};
