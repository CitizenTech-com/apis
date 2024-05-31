export type Member = {
  email: string;
  password: string;
  fullName: string;
  postCode: string;
  address: string;
  phone: string;
  confirmPassword: string;
};
export type LoginRequest = {
  email: string;
  password: string;
};
