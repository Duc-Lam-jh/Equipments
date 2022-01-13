import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Test from '../../pages/TestPage';

import DeviceTypePicker from './DeviceTypePicker/DeviceTypePicker';
import LaptopForm from './SpecificForms/LaptopForm';
import DesktopForm from './SpecificForms/DesktopForm';
import MouseForm from './SpecificForms/MouseForm';
import OtherForm from './SpecificForms/OtherForm';

import './style.css';

class DeclareForm extends Component {

  render() {
    return <div className='content'>
      <DeviceTypePicker />
      <Routes>
        <Route path='/' element={<Navigate to='laptop' />} />
        <Route path='/laptop' element={<LaptopForm />} />
        <Route path='/desktop' element={<DesktopForm />} />
        <Route path='/mouse' element={<MouseForm />} />
        <Route path='/other' element={<OtherForm />} />
      </Routes>
    </div>;
  }
}

export default DeclareForm;