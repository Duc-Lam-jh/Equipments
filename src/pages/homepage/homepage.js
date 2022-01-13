import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';

import Sidebar from '../../components/Sidebar/Sidebar';

import './style.css';

const Homepage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <Sidebar />
        <button onClick={() => dispatch(signOut())}>Sign out</button>
      </div>
    </>
  )
};
export default Homepage;