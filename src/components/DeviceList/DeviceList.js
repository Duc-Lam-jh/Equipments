import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FORM_TYPE_LAPTOP,
  FORM_TYPE_DESKTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  TOGGLE_VIEW_CARD,
  TOGGLE_VIEW_LIST,
  DEVICE_TYPE_ICON_SIZE_SMALL
} from '../../app/utilities/index';
import laptopIcon from '../../app/img/laptop-icon.png';
import desktopIcon from '../../app/img/desktop-icon.png';
import mouseIcon from '../../app/img/mouse-icon.png';
import otherIcon from '../../app/img/other-icon.png';
import rightArrowIcon from '../../app/img/right-arrow-icon.png';

const DeviceList = (props) => {
  const { devices, listStyle } = props;

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

  const renderDeviceType_ListView = (type) => {
    switch (type) {
      case FORM_TYPE_DESKTOP:
        return (
          <div className='device-type list-view'>
            <img src={desktopIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE_SMALL} />
          </div>
        )
      case FORM_TYPE_LAPTOP:
        return (
          <div className='device-type list-view'>
            <img src={laptopIcon} alt='Device type: laptop' width={DEVICE_TYPE_ICON_SIZE_SMALL} />
          </div>
        )
      case FORM_TYPE_MOUSE:
        return (
          <div className='device-type list-view'>
            <img src={mouseIcon} alt='Device type: mouse' width={DEVICE_TYPE_ICON_SIZE_SMALL} />
          </div>
        )
      case FORM_TYPE_OTHER:
      default:
        return (
          <div className='device-type list-view'>
            <img src={otherIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE_SMALL} />
          </div>
        )
    }
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

  const renderDevices_ListView = () => {
    const deviceList = devices.map(device => {
      const deviceUri = '/devices/' + device.id;
      return (
        <div key={device.id} className='item list-view'>
          {renderDeviceType_ListView(device.type)}
          <div className='device-info'>
            <div className='item'>Brand: {device.brand}</div>
            <div className='item'>Owner: {device.userName}</div>
          </div>
          <Link to={deviceUri} className='device-type list-view'>
            <img src={rightArrowIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE_SMALL} />
          </Link>
        </div>
      )
    });
    return deviceList;
  }

  const renderImage = (image) => {
    return <div className='image'>
      <img src={image} alt='Preview image of device' />
    </div>;
  }

  const renderList = () => {
    switch (listStyle) {
      case TOGGLE_VIEW_CARD: {
        return (
          <div className='device-list-container'>
            {renderDevices_CardView()}
          </div>
        );
      }
      case TOGGLE_VIEW_LIST: {
        return (
          <div className='device-list-container list-view'>
            {renderDevices_ListView()}
          </div>
        );
      }
      default:
        break;
    }
  }

  return (
    <>
      {devices && renderList()}
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