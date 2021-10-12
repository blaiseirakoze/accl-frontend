import axios from "axios";
import { CREATE_CASE, ERRORS_CASE, GET_CASE, ICasesParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";

export const listCase = (): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_CASE, data: null, dispatch });
  try {
    // const header = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "Authorization": `Bearer ${localStorage.getItem("USER-TOKEN")}`
    //   },
    // };
    const URL = "/api/case";
    const data = await axios.get(URL);
    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa ", data);
    
    if(data){
      dispatchHandler({
        type: GET_CASE, 
        data: data.data, 
        dispatch 
      });
    }
  } catch (error:any) {
    if (error) { 
      const data = error || error.response; 
      return dispatchHandler({ 
        type: ERRORS_CASE,
        data,
        dispatch
      });
    }
  }
};

export const createCase = (information:ICasesParams): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_CASE, data: null, dispatch });
  try {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
    const URL = "/api/case";
    const data = await axios.post(URL, information);
    if(data){
      dispatchHandler({
        type: CREATE_CASE, 
        data: data.data, 
        dispatch 
      });
    }
  } catch (error:any) {
    if (error) { 
      const data = error || error.response; 
      return dispatchHandler({ 
        type: ERRORS_CASE,
        data,
        dispatch
      });
    }
  }
};
