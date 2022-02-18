import store from '../../../redux/store';

export const authenticatedUser = async (data,type) => {
  await store.dispatch({ type, payload: data });
};