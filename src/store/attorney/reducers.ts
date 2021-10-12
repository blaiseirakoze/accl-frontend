import { ERRORS_CASE, IAttorneyType, GET_CASE } from "./types";

const initialState = {
  cases: []
};

export const attorneyReducer = (
  state = initialState,
  { type, payload }: IAttorneyType
) => {
  switch (type) {
    case ERRORS_CASE:
      return { ...state, errors: payload };
    case GET_CASE:
      return { ...state, cases: payload }  
    default:
      return state;
  }
};
