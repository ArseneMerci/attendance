import { ADD_NETWORK_SUCCESS, ADD_NETWORK_FAILURE} from "../types/AttendActionTypes";
import { httpRequest } from "../../helpers/httpRequest";

export const addNetworkAction = (data)=> async dispatch=> {
    
    try{
        const token = localStorage.getItem('ATTEND_USER_TOKEN')
        const {response} = await httpRequest('POST','https://attendence-solvit.herokuapp.com/api/admin/location/add',data,{
            'Authorization': `Bearer ${token}`});
            dispatch({type: ADD_NETWORK_SUCCESS, payload: response.data});
    }
    catch(err){

        let error = {};
        if (err.response) {
          const {
            data: { status, message },
          } = err.response;
          error = { status, message };
        } else {
          error = {
            status: 500,
            // message: err.message,
            message:'Network Already Exist!'
          };
        }
        dispatch({type: ADD_NETWORK_FAILURE, payload:error});
    }
}
    
