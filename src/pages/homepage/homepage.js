import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../../app/redux';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => dispatch(setActiveUser({ email: null }))}>Sign out</button>
    </>  
  )
};
export default Homepage;