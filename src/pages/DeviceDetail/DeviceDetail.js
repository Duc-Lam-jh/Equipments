import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import LaptopInfo from '../../components/DeviceInfo/LaptopInfo';
import DesktopInfo from '../../components/DeviceInfo/DesktopInfo';
import MouseInfo from '../../components/DeviceInfo/MouseInfo';
import OtherInfo from '../../components/DeviceInfo/OtherInfo';
import UserInfo from '../../components/DeviceInfo/UserInfo';

import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities';

import './style.css';

const DeviceDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [device, setDevice] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDevice = async () => {
      const deviceURI = process.env.REACT_APP_BASE_API_URL + '/devices?id=' + id;
      const deviceReponse = await fetch(deviceURI);
      const deviceData = await deviceReponse.json();
      setDevice(deviceData[0]);

      if (deviceData[0] !== undefined) {
        await getUser(deviceData[0].userId);
        setError(null);
      } else {
        setError('Không có dữ liệu');
      }
      setIsLoading(false);
    }

    const getUser = async (id) => {
      const userURI = process.env.REACT_APP_BASE_API_URL + '/users?id=' + id;
      const userResponse = await fetch(userURI);
      const user = await userResponse.json();
      setUser(user[0]);
    }

    getDevice();
  }, [])

  const renderDevice = (device) => {
    switch (device.type) {
      case FORM_TYPE_LAPTOP:
        return <LaptopInfo detail={device} />
      case FORM_TYPE_DESKTOP:
        return <DesktopInfo detail={device} />
      case FORM_TYPE_MOUSE:
        return <MouseInfo detail={device} />
      case FORM_TYPE_OTHER:
        return <OtherInfo detail={device} />
      default:
        return <p>other</p>
    }
  }

  const renderUser = (user) => {
    return (
      <>
        <UserInfo detail={user} />
      </>
    )
  }

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>;
  } else if (error) {
    return <div className='content'><p>{error}</p></div>;
  } else {
    return (
      <>
        <div className='content'>
          <Link to='edit'><button className='edit-device-button'>Edit</button></Link>
          <h2>Device information</h2>
          {renderDevice(device)}
          <h2>Holder information</h2>
          {renderUser(user)}
        </div>
      </>
    )
  }
}

export default DeviceDetail;