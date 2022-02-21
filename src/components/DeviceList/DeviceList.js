import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FORM_TYPE_LAPTOP,
  FORM_TYPE_DESKTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  TOGGLE_VIEW_CARD,
  TOGGLE_VIEW_LIST
} from '../../app/utilities/index';

const DeviceList = (props) => {
  const { devices, listStyle } = props;
  const [view, setView] = useState(listStyle);

  const renderDeviceType_CardView = (device) => {
    switch (device.type) {
      case FORM_TYPE_DESKTOP:
        return <div className='device-type'>Desktop</div>
      case FORM_TYPE_LAPTOP:
        return <div className='device-type'>Laptop/PC</div>
      case FORM_TYPE_MOUSE:
        return <div className='device-type'>Mouse</div>
      case FORM_TYPE_OTHER:
        return <div className='device-type'>{device.description}</div>
    }
  }

  const renderImage = (image) => {
    return <div className='image'>
      <img src={image} alt='Preview image of device' />
    </div>;
  }

  const renderDevices_CardView = () => {
    const deviceList = devices.map(device => {
      const deviceUri = '/devices/' + device.id;
      return (
        <Link to={deviceUri} key={device.id} style={{ textDecoration: 'none' }} className='item'>
          {renderDeviceType_CardView(device)}
          {renderImage(device.images[0])}
          <div className='owner'>Owner: {device.userName}</div>
        </Link>
      )
    });
    return deviceList;
  }

  const renderList = () => {
    switch (listStyle) {
      case TOGGLE_VIEW_CARD: {
        return renderDevices_CardView();
      }
      case TOGGLE_VIEW_LIST: {
        return <div>list</div>;
      }
      default:
        break;
    }
  }

  return (
    <>
      <div className='device-list-container'>
        {devices && renderList()}
      </div>
    </>
  )
}

DeviceList.propTypes = {
  detail: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    configuration: PropTypes.string,
    size: PropTypes.string,
    team: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  })
}

export default DeviceList;