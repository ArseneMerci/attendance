import { httpRequest } from "../../helpers/httpRequest";
import { GET_USER_ATTENDANCE_FAILURE, GET_USER_ATTENDANCE_SUCCESS } from "../types/AttendActionTypes";

export const getAttendenceAction = (token) => async dispatch => {
    try{
        const {response} = await httpRequest('GET','https://attendence-solvit.herokuapp.com/api/attendence/all',null, {
            "Authorization": `${token}`
          });
        if(response.error){
            dispatch({type: GET_USER_ATTENDANCE_FAILURE, payload: response.data});
            
        }else{
            dispatch({type: GET_USER_ATTENDANCE_SUCCESS, payload: response.data});
        }
    }
    catch(error){
        dispatch({type: GET_USER_ATTENDANCE_FAILURE, payload: error});
    }
}


    