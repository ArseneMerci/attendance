import { LOGIN_FAILURE, LOGIN_SUCCESS,
} from "../types/AttendActionTypes";


const loginState = {
    status:'',
    data: {},
}


export const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status:'login_success',
                data: action.payload.user,
            };
           
        case LOGIN_FAILURE:
            return {
                ...state,
                status: 'login_failed',
                error: action.payload,
            };
        default:
            return state;
    }
}
