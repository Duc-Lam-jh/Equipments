import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';

import Sidebar from '../../components/Sidebar/Sidebar';
import DeclareForm from '../../components/DeclareForm/DeclareForm';
import TestPage from '../TestPage';

import './style.css';

const Homepage = () => {
  const dispatch = useDispatch();

  const listOfPages = [
    {
      title: "Devices in possession",
      path: "/devices"
    },
    {
      title: "Declare possession",
      path: "/declare-device"
    },
    {
      title: "Request new device",
      path: "/request-device"
    },
  ]

  return (
    <>
      <div className='container'>
        <Sidebar items={listOfPages} />
        <Routes>
          <Route path='/' element={<Navigate to='/devices' />} />
          <Route path='/devices' element={<TestPage />} />
          <Route path='/declare-device/*' element={<DeclareForm />} />
        </Routes>
        <div className='content'>
          <button onClick={() => dispatch(signOut())}>Sign out</button>
        </div>
      </div>
    </>
  )
};
export default Homepage;