import actionTypes from './authActionTypes';
import { signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth"

import { authConnection } from "../../firebase/authConfig"
import { getUserByEmail } from '../../data/usersActions';

const setActiveUser = (credentials) => {
  return {
    type: actionTypes.AUTH_SET_ACTIVE_USER,
    userId: credentials.id,
    userEmail: credentials.email,
    userRole: credentials.role,
    userName: credentials.name
  }
}

const setUserToNull = () => {
  return {
    type: actionTypes.AUTH_USER_SIGN_OUT,
  }
}

const setErrorUserNotExist = () => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: "User doesn't exist!",
  }
}

const setErrorWrongPassword = () => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: "Wrong password!",
  }
}

const setError = (msg) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: msg,
  }
}

const signIn = (credentials) => {
  return (dispatch) => {
    dispatch(setError(null));
    signInWithEmailAndPassword(authConnection, credentials.email, credentials.password)
      .then(cred => {
        getUserByEmail(cred.user.email)
          .then(userData => {
            dispatch(setActiveUser({ ...userData }));

            localStorage.setItem("userEmail", userData.email);
            localStorage.setItem("userRole", userData.role);
            localStorage.setItem("userId", userData.id);
            localStorage.setItem("userName", userData.name);
          })
          .catch(error => {
            dispatch(setError(error.message));
          })
      })
      .catch(error => {
        dispatch(setError(error.message));
      })
  }
}

const signOut = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setUserToNull());
    firebaseSignOut(authConnection);
  }
}

export { signIn, signOut, setActiveUser };