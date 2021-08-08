import axios from "axios";
import { LOGIN, ERRORS, ILoginParams, GET_USER } from "./types";
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
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/auth/signin";
    const { data } = await axios.post(URL, formData);
    if (data) {
      dispatchHandler({ type: LOGIN, data: data, dispatch });
      const info:any = decode(data.jwt);
      const role = info.sub;
      console.log("dataaaaaa ", info);
      
      if(role === "admin"){
        // history.push('/signin');
        window.location.replace('/signin');
      }
      if(role === "client"){
        localStorage.setItem("USER-TOKEN", data.jwt);
        // history.push('/attorney/list');
        window.location.replace('/client/attorney/list');
      }
      if(role === "attorney"){
        localStorage.setItem("USER-TOKEN", data.jwt);
        // history.push('/case/list');
        window.location.replace('/attorney/case/list');
      }else{
        // history.push('/signin');
        window.location.replace('/signin');
      }
    }
  } catch (error) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch
      });
    }
  }
};

// export const signUp = (assessment) => async (dispatch) => {
//   try {
//     const URL = "/auth/signup";
//     const header = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     await axios.post(URL, assessment, header);
//     const data = "successfully added";
//     dispatch({
//       type: ADD_ASSESSMENT,
//       payload: data,
//     });
//   } catch (error) {
//     const data = error.response;
//     dispatch({
//       type: ERRORS,
//       payload: data,
//     });
//   }
// };

export const signUp = ( formData: any ): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
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
    const data = "successfully added";
    
  } catch (error) {
    if (error) {
      const data = error || error.response;
      return dispatchHandler({
        type: ERRORS,
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
