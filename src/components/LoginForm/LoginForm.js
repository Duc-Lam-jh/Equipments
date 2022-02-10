import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../app/redux';

import MessagePrompt from '../MessagePrompt/MessagePrompt';
import { emailRegex } from '../../app/utilities/regex';

import './style.css';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if(error){
      setIsLoading(false);
    }
  })

  const handleSubmit = (formData) => {
    dispatch(signIn(formData));
    setIsLoading(true);
  }

  const handleValidate = (formData) => {
    const errors = {};
    const { email, password } = formData;

    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email!';
    }

    if (!password || password.length < 5) {
      errors.password = 'Password too short!';
    }

    return errors;
  }

  return (
    <>
    {isLoading && <MessagePrompt msg="Logging in..." />}
      <Form
        onSubmit={handleSubmit}
        validate={handleValidate}
        render={({ handleSubmit }) => (
          <form className="loginForm" onSubmit={handleSubmit}>

            <Field name="email">
              {({ input, meta }) => (
                <>
                  <label>Email
                  </label>
                  <div className='input'>
                    <input {...input} type="text" placeholder="Email" autoComplete='off' />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                </>
              )}
            </Field>

            <Field name="password">
              {({ input, meta }) => (
                <>
                  <label>Password
                  </label>
                  <div className='input'>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <div>{meta.error}</div>}
                  </div>
                </>
              )}
            </Field>

            <div className='col-span2'>
            {error && <div>{error}</div>}
            </div>

            <div className='col-span2'>
            <button type="submit">Log in</button>
            </div>
          </form>
        )}
      />
    </>
  )
};

export default LoginForm;
