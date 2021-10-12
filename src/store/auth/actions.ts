import axios from "axios";
import { LOGIN, ERRORS_AUTH, ILoginParams, SIGNUP, GET_USERS, ATTORNEY_CATEGORY } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import { decode } from "jsonwebtoken";

  // const userToken:any = localStorage.getItem("QUICKSS-USER-TOKEN");
  // const token:any = userToken && decode(userToken);
  // const role:any = token && token.role;
  // const expiresIn:any = token && token.expiresIn;

  // {sub: "client", exp: 1628358091, iat: 1628353091}

export const authActions = (
  formData: ILoginParams, history:any
): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_AUTH, data: null, dispatch });
  try {
    const URL = "/auth/signin";
    const { data } = await axios.post(URL, formData);
        
    if (data) {
      dispatchHandler({ type: LOGIN, data: "logedIn", dispatch });
      const info:any = decode(data.jwt);
      const role = data.role;
      
      // if(role === "admin"){
      //   // history.push('/signin');
      //   window.location.replace('/signin');
      // }
      if(role === "client"){
        localStorage.setItem("USER-TOKEN", data.jwt+","+data.role);
        // history.push('/client/attorney/list');
        window.location.replace('/client/attorney/list');
      }
      if(role === "attorney"){
        localStorage.setItem("USER-TOKEN", data.jwt+","+data.role);
        // history.push('/attorney/case/list');
        window.location.replace('/attorney/case/list');
      }
      // else{
      //   // history.push('/signin');
      //   window.location.replace('/signin');
      // }
    }
  } catch (error:any) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS_AUTH,
        data,
        dispatch
      });
    }
  }
};

export const signUp = ( formData: any ): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_AUTH, data: null, dispatch });
  try {
    const info:any = new FormData();
    // formData.append("data", JSON.stringify(info));
    // info.append("data", formData.username);
    // console.log("info info ", info);
    const URL = "/auth/signup";
    // const header = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    await axios.post(URL, formData);
    const data = "successfully created";
    dispatchHandler({ type: SIGNUP, data: data, dispatch });
  } catch (error:any) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS_AUTH,
        data,
        dispatch
      });
    }
  }
};

export const getUsers = (): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_AUTH, data: null, dispatch });
  try {
    const URL = "/auth/users";
    const data = await axios.get(URL);
    dispatchHandler({ type: GET_USERS, data: data.data, dispatch });
  } catch (error:any) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS_AUTH,
        data,
        dispatch
      });
    }
  }
};

export const getAttorneyCategory = (): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_AUTH, data: null, dispatch });
  try {
    const URL = "/api/attorneyCategory";
    const data = await axios.get(URL);
    dispatchHandler({ type: ATTORNEY_CATEGORY, data: data.data, dispatch });
  } catch (error:any) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS_AUTH,
        data,
        dispatch
      });
    }
  }
};

export const SignOut = () => {
  localStorage.removeItem("USER-TOKEN");
  window.location.replace('/signin');

};
