import React from 'react';

import { 
  FORM_TYPE_DESKTOP, 
  FORM_TYPE_LAPTOP, 
  FORM_TYPE_MOUSE, 
  FORM_TYPE_OTHER, 
  DEVICE_TYPE_ICON_SIZE } from '../../app/utilities/index';
import laptopIcon from '../../app/img/laptop-icon.png';
import desktopIcon from '../../app/img/desktop-icon.png';
import mouseIcon from '../../app/img/mouse-icon.png';
import otherIcon from '../../app/img/other-icon.png';

import './style.css';

const RequestList = (props) => {
  const { requests } = props;

  const renderListItem = () => {

  }

  const renderDeviceTypeIcon = (type) => {
    switch (type) {
      case FORM_TYPE_DESKTOP:
        return (
          <div className='device-type'>
            <img src={desktopIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE} />
          </div>
        )
      case FORM_TYPE_LAPTOP:
        return (
          <div className='device-type'>
            <img src={laptopIcon} alt='Device type: laptop' width={DEVICE_TYPE_ICON_SIZE} />            
          </div>
        )
      case FORM_TYPE_MOUSE:
        return (
          <div className='device-type'>           
            <img src={mouseIcon} alt='Device type: mouse' width={DEVICE_TYPE_ICON_SIZE} />
          </div>
        )
      case FORM_TYPE_OTHER:
      default:
        return (
          <div className='device-type'>
            <img src={otherIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE} />
          </div>
        )
    }
  }

  return (
    <>
      <div className='request-list'>
        <div className='item'>
          {renderDeviceTypeIcon('other')}
          <div className='info'>Laptop</div>
          <div className='controls'>Laptop</div>
        </div>
      </div>
    </>
  )
}

export default RequestList;