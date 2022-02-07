import React, { useState, useEffect } from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';

import './style.css';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const getUser = async (id) => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/users?id=' + id;
      const userResponse = await fetch(uri);
      const user = await userResponse.json();
      return user[0];
    }

    const getDevices = async () => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/devices';
      const response = await fetch(uri);
      const devices = await response.json();
      
      for(let i = 0; i < devices.length; i++) {
        devices[i].user = await getUser(devices[i].userId);
      }

      setDevices([...devices]);
      setIsLoading(false);
    }

    getDevices();
  }, [])

  if (isLoading) {
    return <div className='content'><p>loading...</p></div>;
  }

  return (
    <>
      <div className='content'>
        <h2>Device list</h2>
        {devices && <DeviceList
          devices={devices}/>}
      </div>
    </>
  )
}

export default DeviceListPage;