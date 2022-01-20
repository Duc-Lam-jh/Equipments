import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';
import LaptopEdit from '../../components/ItemEdit/LaptopEdit';
import DesktopEdit from '../../components/ItemEdit/DesktopEdit';
import MouseEdit from '../../components/ItemEdit/MouseEdit';
import OtherEdit from '../../components/ItemEdit/OtherEdit';

import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities';

const DeviceEditPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [device, setDevice] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setIsLoading(true);

    const deviceURI = process.env.REACT_APP_BASE_API_URL + '/devices?id=' + id;
    const deviceReponse = await fetch(deviceURI);
    const deviceData = await deviceReponse.json();
    setDevice(deviceData[0]);

    if (deviceData[0] !== undefined) {
      const userURI = process.env.REACT_APP_BASE_API_URL + '/users?id=' + deviceData[0].userId;
      const userResponse = await fetch(userURI);
      const user = await userResponse.json();
      setUser(user[0]);

      setError(null);
      setIsLoading(false);
    } else {
      setError('Không có dữ liệu');
      setIsLoading(false);
    }

  }, [])

  const renderDevice = (device) => {
    switch (device.type) {
      case FORM_TYPE_LAPTOP:
        return <LaptopEdit detail={device} />
      case FORM_TYPE_DESKTOP:
        return <DesktopEdit detail={device} />
      case FORM_TYPE_MOUSE:
        return <MouseEdit detail={device} />
      case FORM_TYPE_OTHER:
        return <OtherEdit detail={device} />
      default:
        return <p>other</p>
    }
  }

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>;
  } else if (error) {
    return <div className='content'><p>{error}</p></div>;
  } else {
    return (
      <>
        <div className='content'>
          <h2>Edit device information</h2>
          {renderDevice(device)}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='content'>
        edit
      </div>
    </>
  )
}

export default DeviceEditPage;