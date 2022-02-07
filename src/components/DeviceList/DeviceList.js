import React from 'react';
import { Link } from 'react-router-dom';

import {
  FORM_TYPE_LAPTOP,
  FORM_TYPE_DESKTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER
} from '../../app/utilities/index';

const DeviceList = (props) => {
  const { devices } = props;

  const renderDeviceType = (type) => {
    switch (type) {
      case FORM_TYPE_DESKTOP:
        return <div className='device-type'>Desktop</div>
      case FORM_TYPE_LAPTOP:
        return <div className='device-type'>Laptop/PC</div>
      case FORM_TYPE_MOUSE:
        return <div className='device-type'>Mouse</div>
      case FORM_TYPE_OTHER:
        return <div className='device-type'>Other</div>
    }
  }

  const renderImage = (image) => {
    return <div className='image'>
      <img src={image} alt='Preview image of device' />
    </div>;
  }

  const renderDevices = () => {
    const deviceList = devices.map(device => {
      const deviceUri = '/devices/' + device.id;
      return (
        <Link to={deviceUri} key={device.id}>
          <div className='item'>
            {renderDeviceType(device.type)}
            {renderImage(device.images[0])}
            <div className='owner'>Owner: {device.userName}</div>
          </div>
        </Link>
      )
    });
    return deviceList;
  }

  return (
    <>
      <div className='device-list-container'>
        {devices && renderDevices()}
      </div>
    </>
  )
}

export default DeviceList;