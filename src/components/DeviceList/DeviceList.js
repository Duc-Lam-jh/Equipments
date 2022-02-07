import React from 'react';
import { Link } from 'react-router-dom';

const DeviceList = (props) => {
  const { devices } = props;

  return (
    <>
      <div className='device-list-container'>
        <div className='item'>
          <div className='device-type'>Laptop/PC</div>
          <div className='image'></div>
          <div className='owner'>Duc Lam</div>
          <div className='team'>Yin yang</div>
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
      </div>
    </>
  )
}

export default DeviceList;