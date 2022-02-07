import React, { useState, useEffect } from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';

import './style.css';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState([]);

  const filterList = [
    {
      name: 'All',
    }
  ]

  useEffect(() => {
    const getDevices = async () => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/devices';
      const response = await fetch(uri);
      const devices = await response.json();
      
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
        <h1>Device list</h1>
        {devices && <DeviceList
          devices={devices}/>}
      </div>
    </>
  )
}

export default DeviceListPage;