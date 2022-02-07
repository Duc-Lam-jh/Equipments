import React, { useState, useEffect } from 'react';
import DeviceList from '../../components/DeviceList/DeviceList';

import './style.css';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    setIsLoading(false);
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