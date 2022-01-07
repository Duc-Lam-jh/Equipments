import actionTypes from './authActionTypes';

const setActiveUser = (credentials) => {
  return {
    type: actionTypes.AUTH_SET_ACTIVE_USER,
    userEmail: credentials.email,
    userRole: credentials.role,
  }
}

const signOut = () => {
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

const signIn = (credentials) => {
  const uri = process.env.REACT_APP_BASE_API_URL + '/users?q=' + credentials.email;
  return (dispatch) => {
    fetch(uri)
    .then(res => res.json())
    .then(data => {
      if(data.length === 0) {
        dispatch(setErrorUserNotExist());
      } else {
        if(credentials.password !== data[0].password) {
        dispatch(setErrorWrongPassword());
        } else {
          dispatch(setActiveUser({...data[0]}));
        }
      }
    })
  }
}

export { signIn, signOut, setActiveUser };