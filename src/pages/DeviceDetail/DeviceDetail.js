import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LaptopInfo from '../../components/DeviceInfo/LaptopInfo';
import DesktopInfo from '../../components/DeviceInfo/DesktopInfo';
import MouseInfo from '../../components/DeviceInfo/MouseInfo';
import OtherInfo from '../../components/DeviceInfo/OtherInfo';
import UserInfo from '../../components/DeviceInfo/UserInfo';

import './style.css';

const DeviceDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [device, setDevice] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(async () => {
    setIsLoading(true);

    const deviceURI = process.env.REACT_APP_BASE_API_URL + '/devices?id=' + id;
    const deviceReponse = await fetch(deviceURI);
    const device = await deviceReponse.json();
    setDevice(device[0]);

    const userURI = process.env.REACT_APP_BASE_API_URL + '/users?id=' + device[0].userId;
    const userResponse = await fetch(userURI);
    const user = await userResponse.json();
    setUser(user[0]);

    setIsLoading(false);
  }, [])

  const renderDevice = (device) => {
    switch (device.type) {
      case 'laptop':
        return <LaptopInfo detail={device} />
      case 'desktop':
        return <DesktopInfo detail={device} />
      case 'mouse':
        return <MouseInfo detail={device} />
      case 'other':
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
  } else {
    return (
      <>
        <div className='content'>
          <h2>Device information</h2>
          {renderDevice(device)}
          <h2>Holder information</h2>
          {renderUser(user)}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='content'>

      </div>
    </>
  )
}

export default DeviceDetail;