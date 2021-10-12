export const ERRORS_CASE = "ERRORS";
export const GET_CASE = "GET_CASE";
export const CREATE_CASE = "CREATE_CASE"

export interface IErrors {
  statusCode : string,
  statusMessage : string,
  zoneDateTime : string
}

interface ILoginErrors {
  type: typeof ERRORS_CASE;
  payload: {
    errors: IErrors;
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
  client: string,
  attorney: string
}

interface ICase {
  type: typeof GET_CASE;
  payload: {
    cases: ICasesParams;
  };
}

export type IAttorneyType = ILoginErrors | ICase;
