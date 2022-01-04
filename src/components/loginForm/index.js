import React from 'react';
import { Field, Form } from 'react-final-form';

import './style.css';

const LoginForm = () => {

  const handleSubmit = (formData) => {
    console.log(formData);
    if(!formData){
      alert('Not enough information!');
    }
  }

  const handleValidate = (formData) => {
    const errors = {};
    const emailRegExp = /^[A-Za-z0-9-_+\.]+@[A-Za-z0-9-_]+(\.[A-Za-z0-9-_]+)+\w{1,3}$/m;

    if(!emailRegExp.test(formData.email)){
      errors.email = 'Invalid email!';
    }

    if(!formData.password || formData.password.length < 5){
      errors.password = 'Password too short!';
    }

    return errors;
  }

  return (
    <>
      <Form
        onSubmit={ handleSubmit }
        validate={ handleValidate }
        render={({ handleSubmit }) => (
          <form className="loginForm" onSubmit={handleSubmit}>

            <Field name="email">
              {({ input, meta }) => (
                <>
                  <label>Email
                    <div className='input'>
                      <input {...input} type="text" placeholder="Email" autoComplete='off'/>
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="password">
              {({ input, meta }) => (
                <>
                  <label>Password
                    <div className='input'>
                      <input {...input} type="password" placeholder="Password" />
                      {meta.error && meta.touched && <div>{meta.error}</div>}
                    </div>
                  </label>
                </>
              )}
            </Field>
              
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </>
  )
};

export default LoginForm;