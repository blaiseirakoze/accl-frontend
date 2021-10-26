import axios from "axios";
import { CREATE_CASE, ERRORS_CASE, GET_CASE, CHANGE_CASE_STATUS, ICasesParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import { sys } from "typescript";

export const listCase = (): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_CASE, data: null, dispatch });
  try {
    const URL = "/api/case";
    const data = await axios.get(URL);
    
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

export const createCase = (info:any): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_CASE, data: null, dispatch });
  try {
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const information:any = new FormData();
    information.append("data", JSON.stringify({ caseDescription:info.caseDescription, client: info.client, attorney: info.attorney }));
    information.append("document", info.document[0]);
    
    const URL = "/api/case";
    const data = await axios.post(URL, information, header);
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

export const changeCaseStatus = (info:any): AppThunk => async dispatch => {
  dispatchHandler({ type: ERRORS_CASE, data: null, dispatch });
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const URL = `/api/caseStatus?id=${info.id}&status=${info.status}`;
    const data = await axios.get(URL, header);
    
    if(data){
      dispatchHandler({
        type: CHANGE_CASE_STATUS, 
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
