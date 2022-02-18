import {combineReducers} from 'redux';
import {  loginReducer } from "./userReducer";
import getUsersReducer from "./getUsersReducer";
import getAttendenceReducer from "./getAttendenceReducer";
import {addUserReducer} from "./addUserReducer";

const RootReducer = combineReducers({
    login: loginReducer,
    getUsers: getUsersReducer,
    addUser: addUserReducer,
    getAttendence: getAttendenceReducer,
});

export default RootReducer;