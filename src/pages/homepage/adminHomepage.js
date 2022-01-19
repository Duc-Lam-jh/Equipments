import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import DeviceDetail from '../../pages/DeviceDetail/DeviceDetail';
import Test from '../TestPage';
import DeviceList from '../../components/DeviceList/DeviceList';

const AdminHomepage = () => {
  const listOfPages = [
    {
      title: "Devices",
      path: "/devices"
    },
    {
      title: "Requests",
      path: "/requests"
    },
  ]

  return (
    <>
      <div className='container'>
        <Sidebar items={listOfPages} />
        <Routes>
          <Route path='/*' element={<Navigate to='/devices' />} />
          <Route path='/devices' element={<DeviceList />} />
          <Route path='/devices/:id' element={<DeviceDetail />} />
          <Route path='/requests/*' element={<Test />} />
        </Routes>
      </div>
    </>
  )
};
export default AdminHomepage;