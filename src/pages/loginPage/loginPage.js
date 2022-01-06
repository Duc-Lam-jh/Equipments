import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveUser } from '../../app/redux';
import LoginForm from '../../components/loginForm/loginForm';
import './style.css';

const LoginPage = () => {
  const userEmail = useSelector(state => state.auth.userEmail);
  const dispatch = useDispatch();

  console.log(userEmail);
  return (
    <React.Fragment>
      {!userEmail ? 
      <>
        <h3>Log in with your company account</h3>
        <LoginForm/>
      </> 
      :
      <>
        <h1>logged in</h1>
        <button onClick={() => dispatch(setActiveUser({ email: null }))}>Sign out</button>
      </>
      }
    </React.Fragment>  
  )
};
export default LoginPage;