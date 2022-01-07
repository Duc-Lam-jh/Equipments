import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../app/redux';

const AdminHomepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Admin home</h2>
      <Link to='/user'>User home</Link>
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </>
  )
};
export default AdminHomepage;