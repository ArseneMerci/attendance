import thunk from 'redux-thunk'
import RootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const initialState = {};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = process.env.NODE_ENV === 'production' ? createStore(
  RootReducer,
  initialState,
  applyMiddleware(thunk)
) : createStore(
  RootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
)

export default Store