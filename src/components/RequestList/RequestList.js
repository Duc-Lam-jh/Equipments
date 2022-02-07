import React from 'react';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  DEVICE_TYPE_ICON_SIZE,
  ACCEPT_KEYWORD,
  DECLINE_KEYWORD
} from '../../app/utilities/index';
import laptopIcon from '../../app/img/laptop-icon.png';
import desktopIcon from '../../app/img/desktop-icon.png';
import mouseIcon from '../../app/img/mouse-icon.png';
import otherIcon from '../../app/img/other-icon.png';

import './style.css';

const RequestList = (props) => {
  const { requests } = props;

  const renderListItem = () => {
    const requestList = requests.map(request => {
      return (
        <div id={'request' + request.id} key={request.id} className='item'>
          {renderDeviceTypeIcon(request.type)}
          <div className='info'>
            <div className='title'>Requester: {request.user.name}</div>
            <div className='subtitle'>{request.reason}</div>
          </div>
          <div className='controls'>
            <button className='accept' onClick={() => handleChangeRequestStatus(request, ACCEPT_KEYWORD)}>
              Accept
            </button>
            <button className='decline' onClick={() => handleChangeRequestStatus(request, DECLINE_KEYWORD)}>
              Decline
            </button>
          </div>
        </div>
      )
    });

    return requestList;
  }

  const renderDeviceTypeIcon = (type) => {
    switch (type) {
      case FORM_TYPE_DESKTOP:
        return (
          <div className='device-type'>
            <img src={desktopIcon} alt='Device type: desktop' width={DEVICE_TYPE_ICON_SIZE} />
            <div>Desktop</div>
          </div>
        )
      case FORM_TYPE_LAPTOP:
        return (
          <div className='device-type'>
            <img src={laptopIcon} alt='Device type: laptop' width={DEVICE_TYPE_ICON_SIZE} />
            <div>Laptop/PC</div>
          </div>
        )
      case FORM_TYPE_MOUSE:
        return (
          <div className='device-type'>
            <img src={mouseIcon} alt='Device type: mouse' width={DEVICE_TYPE_ICON_SIZE} />
            <div>Mouse</div>
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

  const handleChangeRequestStatus = (request, status) => {
    request.status = status;
    delete request.user;

    props.handleChangeRequestStatus(request);
  }

  return (
    <>
      <div className='request-list'>
        {requests && renderListItem()}
      </div>
    </>
  )
}

export default RequestList;