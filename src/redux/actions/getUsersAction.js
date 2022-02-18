import { GET_USERS_SUCCESS, GET_USERS_FAILURE} from "../types/AttendActionTypes";
import { httpRequest } from "../../helpers/httpRequest";

export const getUsersAction = (token) => async dispatch => {
    try{
        const {response} = await httpRequest('GET','https://attendence-solvit.herokuapp.com/api/admin/users',null, {
            "Authorization": `${token}`
          });
        if(response.error){
            dispatch({type: GET_USERS_FAILURE, payload: response.data});
            
        }else{
            dispatch({type: GET_USERS_SUCCESS, payload: response.data});
        }
    }
    catch(error){
        dispatch({type: GET_USERS_FAILURE, payload: error});
    }
}
