import authReducer from './auth/authReducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer);

export default store;