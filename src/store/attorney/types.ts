import { IUserParams } from "../auth/types";

export const ERRORS_CASE = "ERRORS";
export const GET_CASE = "GET_CASE";
export const CREATE_CASE = "CREATE_CASE";
export const CHANGE_CASE_STATUS = "CHANGE_CASE_STATUS";

export interface IResponse {
  statusCode : string,
  statusMessage : string,
  zoneDateTime : string
}

interface ILoginErrors {
  type: typeof ERRORS_CASE;
  payload: {
    errors: IResponse;
  };
}

export interface ICasesParams {
  id?: string,
  caseDescription: string,
  status?: string,
  won?: boolean,
  caseSummary?: string,
  document: string,
  deleted?: boolean,
  createOn?: string,
  updatedOn?: string,
  client?: IUserParams,
  attorney?: IUserParams
}

interface ICase {
  type: typeof GET_CASE;
  payload: {
    cases: ICasesParams;
  };
}

interface ICreateCase {
  type: typeof CREATE_CASE;
  payload: {
    caseMessage: IResponse;
  };
}

interface IChangeCaseStatus {
  type: typeof CHANGE_CASE_STATUS;
  payload: {
    changeCaseMessage: string;
  };
}

export type IAttorneyType = ILoginErrors | ICase | ICreateCase | IChangeCaseStatus;
