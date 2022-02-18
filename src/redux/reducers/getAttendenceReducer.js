import { GET_USER_ATTENDANCE_FAILURE, GET_USER_ATTENDANCE_SUCCESS } from "../types/AttendActionTypes";


const initialState = {
    data: [],
    status: '',
};

export default function getAttendenceReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_ATTENDANCE_SUCCESS:
            return {
                ...state,
                status: 'success',
                data: action.payload
            };
        case GET_USER_ATTENDANCE_FAILURE:
            return {
                ...state,
                status: 'error',
                error: action.payload
            };
        default:
            return state;
    }
}