import actionTypes from './authActionTypes';

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

          localStorage.setItem("userEmail", data[0].email);
          localStorage.setItem("userRole", data[0].role);
          localStorage.setItem("userId", data[0].id);
          localStorage.setItem("userName", data[0].name);
        }
      }
    })
  }
}

const signOut = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setUserToNull());
    window.location.href = '/';
  }
}

export { signIn, signOut, setActiveUser };