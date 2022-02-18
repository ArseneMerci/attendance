import { 
    REGISTER_SUCCESS, REGISTER_FAILURE
    } from "../types/AttendActionTypes";
    import { httpRequest } from "../../helpers/httpRequest";
    
    
    export const addUserAction = (user)=> async dispatch=> {
    
        try{
            const token = localStorage.getItem('ATTEND_USER_TOKEN')
            const {response} = await httpRequest('POST','https://attendence-solvit.herokuapp.com/api/admin/signup',user,{
                'Authorization': `Bearer ${token}`});
           
            if(response.error){
                dispatch({type: REGISTER_FAILURE, payload: response.data});
                
            }else{
                dispatch({type: REGISTER_SUCCESS, payload: response.data});
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
                message:'Error While Creating User'
              };
            }
            dispatch({type: REGISTER_FAILURE, payload:error});
        }
    }
        
    