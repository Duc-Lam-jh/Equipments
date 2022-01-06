import actionTypes from './authActionTypes';

const signIn = () => {
  return {
    type: actionTypes.SIGN_IN,
  }
}

const setActiveUser = (credentials) => {
  return {
    type: actionTypes.SET_ACTIVE_USER,
    userEmail: credentials.email,
  }
}

export { signIn, setActiveUser };