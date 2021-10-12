import { LOGIN, ERRORS_AUTH, IAuthType, SIGNUP, GET_USERS, ATTORNEY_CATEGORY } from "./types";

const initialState = {
  data: null,
  users: [],
  attorneyCategory: []
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthType
) => {
  switch (type) {
    case LOGIN:
      return { ...state, data: payload };
    case ERRORS_AUTH:
      return { ...state, authErrors: payload };
    case SIGNUP:
      return { ...state, signupMessage: payload }  
    case GET_USERS:
      return { ...state, users: payload }
    case ATTORNEY_CATEGORY:
      return { ...state, attorneyCategory: payload }
    default:
      return state;
  }
};
