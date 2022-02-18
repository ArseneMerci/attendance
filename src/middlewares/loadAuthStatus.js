import {LOGIN_SUCCESS} from '../redux/types/AttendActionTypes';
import { authenticatedUser } from '../redux/reducers/userReducer/loadState';

const LoadFromLocalStorage = () => new Promise((resolve, reject) => {
  const userInfo = localStorage.getItem('user');
  if (userInfo) {
    authenticatedUser(JSON.parse(userInfo),LOGIN_SUCCESS);
    return resolve();
  }
  return resolve();
});
export default LoadFromLocalStorage;