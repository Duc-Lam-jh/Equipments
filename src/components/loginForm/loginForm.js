import React from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../app/redux';

import { emailRegex } from '../../app/utilities/regex';

import './style.css';

const LoginForm = () => {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(signIn(formData));
  }

  const handleValidate = (formData) => {
    const errors = {};
    const { email, password } = formData;

    if(!emailRegex.test(email)){
      errors.email = 'Invalid email!';
    }

    if(!password || password.length < 5){
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

            {error && <div>{ error }</div>}
              
            <button type="submit">Log in</button>
          </form>
        )}
      />
    </>
  )
};

export default LoginForm;