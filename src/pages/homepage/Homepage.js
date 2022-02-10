import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../app/redux';

import Sidebar from '../../components/Sidebar/Sidebar';
import DeclareForm from '../../components/DeclareForm/DeclareForm';
import TestPage from '../TestPage';

import './style.css';
import RequestForm from '../../components/RequestForm/RequestForm';

const Homepage = () => {
  const dispatch = useDispatch();

  const listOfPages = [
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
          <Route path='/*' element={<Navigate to='/declare-device' />} />
          <Route path='/declare-device/*' element={<DeclareForm />} />
          <Route path='/request-device' element={<RequestForm />} />
        </Routes>
      </div>
    </>
  )
};
export default Homepage;
