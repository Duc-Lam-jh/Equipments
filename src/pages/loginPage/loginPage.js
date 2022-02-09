import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {  
  return (
    <div className='content'>
      <h3>Log in with your company account</h3>
      <LoginForm />
      <p>
        Admin: test@mail.com - 123456
        <br />
        User 1: test2@mail.com - 123456
        <br />
        User 2: test3@mail.com - 123456
      </p>
    </div>
  )
};
export default LoginPage;