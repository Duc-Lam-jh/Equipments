import actionTypes from './authActionTypes';

const initialState = {
  userEmail: null,
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_ACTIVE_USER:
      return {
        ...state,
        userEmail: action.userEmail,
      }
    default:
      return state;
  }
}

export default authReducer;