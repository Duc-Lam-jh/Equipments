import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
      <Link to='/user'>user </Link>
    </>  
  )
};
export default Homepage;