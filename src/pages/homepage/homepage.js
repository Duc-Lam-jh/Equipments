import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </>  
  )
};
export default Homepage;