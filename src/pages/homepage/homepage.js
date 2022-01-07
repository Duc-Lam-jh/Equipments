import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Home</h2>
      <Link to='/user'>User home</Link>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </>  
  )
};
export default Homepage;