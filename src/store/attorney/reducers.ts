import { ERRORS_CASE, IAttorneyType, GET_CASE, CREATE_CASE, CHANGE_CASE_STATUS } from "./types";

const initialState = {
  cases: [],
  caseMessage: null,
  caseErrors: null,
  changeCaseMessage: null
};

export const attorneyReducer = (
  state = initialState,
  { type, payload }: IAttorneyType
) => {
  switch (type) {
    case ERRORS_CASE:
      return { ...state, caseErrors: payload, caseMessage: null };
    case GET_CASE:
      return { ...state, cases: payload }  
    case CREATE_CASE:
      return { ...state, caseMessage: payload, caseErrors: null }  
    case CHANGE_CASE_STATUS:
      return { ...state, changeCaseMessage: payload }
    default:
      return state;
  }
};
