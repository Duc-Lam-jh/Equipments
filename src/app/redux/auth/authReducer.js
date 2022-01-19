import actionTypes from './authActionTypes';

const initialState = {
  userId: null,
  userEmail: null,
  userRole: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SET_ACTIVE_USER:
      return {
        ...state,
        userId: action.userId,
        userEmail: action.userEmail,
        userRole: action.userRole,
        error: null,
      }
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        userRole: null
      }
    case actionTypes.AUTH_USER_SIGN_OUT:
      return {
        userId: null,
        userEmail: null,
        userRole: null
      }
    default:
      return state;
  }
}

export default authReducer;