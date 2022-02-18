import { 
LOGIN_FAILURE, LOGIN_SUCCESS,
} from "../types/AttendActionTypes";
import { httpRequest } from "../../helpers/httpRequest";


export const loginAction = (user)=> async dispatch=> {

    try{
        const {response} = await httpRequest('POST','https://attendence-solvit.herokuapp.com/api/user/login',user);
       
        if(response.error){
            dispatch({type: LOGIN_FAILURE, payload: response.data});
            
        }else{
            dispatch({type: LOGIN_SUCCESS, payload: response.data});
        }
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
            message:'Email or Password is Incorrect'
          };
        }
        dispatch({type: LOGIN_FAILURE, payload:error});
    }
}
    
