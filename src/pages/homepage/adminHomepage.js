import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar/Sidebar';
import DeviceDetail from '../DeviceDetail/DeviceDetail';
import DeviceListPage from '../DeviceListPage/DeviceListPage';
import DeviceEditPage from '../DeviceEditPage/DeviceEditPage';
import RequestListPage from '../RequestListPage/RequestListPage';
import Test from '../TestPage';

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
      <Sidebar items={listOfPages} />
      <div className='container'>
        <Routes>
          <Route path='/*' element={<Navigate to='/devices' />} />
          <Route path='/devices' element={<DeviceListPage />} />
          <Route path='/devices/:id' element={<DeviceDetail />} />
          <Route path='/devices/:id/edit' element={<DeviceEditPage />} />
          <Route path='/requests' element={<RequestListPage />} />
        </Routes>
      </div>
    </>
  )
};
export default AdminHomepage;