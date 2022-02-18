import { ADD_NETWORK_SUCCESS, ADD_NETWORK_FAILURE
} from "../types/AttendActionTypes";


const networkState = {
    status:'',
}


export const addNetwork = (state = networkState, action) => {
    switch (action.type) {
        case ADD_NETWORK_SUCCESS:
            return {
                ...state,
                status:'success',
            };
           
        case ADD_NETWORK_FAILURE:
            return {
                ...state,
                status: 'error',
                error: action.payload,
            };
        default:
            return state;
    }
}
