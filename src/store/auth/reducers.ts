import { LOGIN, ERRORS, IAuthType, SIGNUP, GET_USERS } from "./types";

const initialState = {
  data: null,
  users: []
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthType
) => {
  switch (type) {
    case LOGIN:
      return { ...state, data: payload };
    case ERRORS:
      return { ...state, errors: payload };
    case SIGNUP:
      return { ...state, signupMessage: payload }  
    case GET_USERS:
      return { ...state, users: payload }  
    default:
      return state;
  }
};
