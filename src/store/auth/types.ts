export const LOGIN = "LOGIN";
export const ERRORS = "ERRORS";
export const SIGNUP = "SIGNUP";
export const GET_USERS = "GET_USERS";
export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface ILoginParams {
  username: string;
  password: string;
}

interface ILogin {
  type: typeof LOGIN;
  payload: {
    data: ILoginParams;
  };
}

interface ILoginErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export interface IUserParams {
  id: string;
  fullName: string;
  email: string;
  username: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  clientId: string;
  roleId: string;
}

export interface IRoleParams {
  id: string,
  name: string,
  createOn: string
}

export interface IAttorneyCategoryParams {
  id: string,
  name: string,
  createOn: string
}

export interface IGetUsersparams {
  id: string,
  active: boolean,
  firstName: string,
  username: string,
  lastName: string,
  address: string,
  phoneNumber: string,
  dob: string,
  createOn: string,
  rate: number,
  role: IRoleParams,
  attorneyCategory: IAttorneyCategoryParams
}

interface IGetUsers {
  type: typeof GET_USERS;
  payload: {
    users: IGetUsersparams;
  }
}

interface IUserSignup {
  type: typeof SIGNUP;
  payload: {
    signupMessage: string;
  }
}

export type IAuthType = ILogin | ILoginErrors | IUserSignup | IGetUsers;
