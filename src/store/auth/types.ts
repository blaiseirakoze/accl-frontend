import { CHANGE_CASE_STATUS } from "../attorney/types";

export const LOGIN = "LOGIN";
export const ERRORS_AUTH = "ERRORS_AUTH";
export const SIGNUP = "SIGNUP";
export const GET_USERS = "GET_USERS";
export const ATTORNEY_CATEGORY = "ATTORNEY_CATEGORY";
export const CHANGE_USER_STATUS = "CHANGE_USER_STATUS"

export interface IResponse {
  statusCode : string,
  statusMessage : string,
  zoneDateTime : string
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
    signupMessage: string;
  };
}

interface ILoginErrors {
  type: typeof ERRORS_AUTH;
  payload: {
    authErrors: IResponse;
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

export interface IAttorneyCategoryparams {
  id: string,
  name: string,
  createOn: string
}

interface IAttorneyCategory {
  type: typeof ATTORNEY_CATEGORY;
  payload: {
    roles: IAttorneyCategoryparams
  }
}

interface IChangeUserStatus {
  type: typeof CHANGE_CASE_STATUS;
  payload: {
    changeUserStatusMessage: string
  }
}

export type IAuthType = ILogin | ILoginErrors | IUserSignup | IGetUsers | IAttorneyCategory | IChangeUserStatus;
