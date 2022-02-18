import { REGISTER_SUCCESS, REGISTER_FAILURE
} from "../types/AttendActionTypes";


const addUserState = {
    status:'',
    data: {},
}


export const addUserReducer = (state = addUserState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                status:'register_success',
                data: action.payload.user,
            };
           
        case REGISTER_FAILURE:
            return {
                ...state,
                status: 'register_failed',
                error: action.payload,
            };
        default:
            return state;
    }
}
