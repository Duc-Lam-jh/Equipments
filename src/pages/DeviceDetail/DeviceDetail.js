import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import LaptopInfo from '../../components/DeviceInfo/LaptopInfo';
import DesktopInfo from '../../components/DeviceInfo/DesktopInfo';
import MouseInfo from '../../components/DeviceInfo/MouseInfo';
import OtherInfo from '../../components/DeviceInfo/OtherInfo';
import UserInfo from '../../components/DeviceInfo/UserInfo';

import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities';
import { getDeviceById } from '../../app/data/devicesActions';
import { getUserById } from '../../app/data/usersActions';

import './style.css';

const DeviceDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [device, setDevice] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDevice = async () => {
      const deviceData = await getDeviceById(id);
      setDevice(deviceData);

      if (deviceData !== undefined) {
        setError(null);
        await getUser(deviceData.userId);
      } else {
        setError('Không có dữ liệu');
      }
      setIsLoading(false);
    }

    const getUser = async (id) => {
      const user = await getUserById(id);
      setUser(user);
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