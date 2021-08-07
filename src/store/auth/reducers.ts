import { LOGIN, ERRORS, IAuthType, GET_USER } from "./types";

const initialState = {
  message: null,
  user: {}
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthType
) => {
  switch (type) {
    case LOGIN:
      return { ...state, message: payload };
    case ERRORS:
      return { ...state, errors: payload };
    case GET_USER:
      return { ...state, user: payload }  
    default:
      return state;
  }
};
