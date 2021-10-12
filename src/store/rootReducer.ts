import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { attorneyReducer } from "./attorney/reducers"

export const rootReducer = combineReducers({
  auth: authReducer,
  attorney: attorneyReducer
});
