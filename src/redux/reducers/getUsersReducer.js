import { GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../types/AttendActionTypes";

const initialState = {
    data: [],
    status: '',
};

export default function getUsersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                status: 'success',
                data: action.payload
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                status: 'error',
                error: action.payload
            };
        default:
            return state;
    }
}