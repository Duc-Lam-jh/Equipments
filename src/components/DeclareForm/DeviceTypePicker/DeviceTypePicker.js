import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

class DeviceTypePicker extends Component {
  render() { 
    return <div className='device-type-picker'>
      <NavLink to='/declare-device/laptop'><span>Laptop/PC</span></NavLink>
      <NavLink to='/declare-device/desktop'><span>Desktop</span></NavLink>
      <NavLink to='/declare-device/mouse'><span>Mouse</span></NavLink>
      <NavLink to='/declare-device/other'><span>Other</span></NavLink>
    </div>;
  }
}
 
export default DeviceTypePicker;