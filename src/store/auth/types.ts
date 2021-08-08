export const LOGIN = "LOGIN";
export const ERRORS = "ERRORS";
export const GET_USER = "GET_USER";
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
interface IUser {
  type: typeof GET_USER;
  payload: {
    errors: IUserParams;
  };
}

export type IAuthType = ILogin | ILoginErrors | IUser;
