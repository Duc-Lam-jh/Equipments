import authReducer from './auth/authReducer';
import formReducer from './form/formReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;