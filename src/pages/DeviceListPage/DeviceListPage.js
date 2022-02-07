import React, { useState, useEffect } from 'react';

import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import DeviceList from '../../components/DeviceList/DeviceList';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER
} from '../../app/utilities/index'

import './style.css';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState(null);
  const [originalDevices, setOriginalDevices] = useState(null);

  const filterList = [
    {
      name: 'All',
      type: 'all'
    },
    {
      name: 'Laptop/PC',
      type: FORM_TYPE_LAPTOP
    },
    {
      name: 'Desktop',
      type: FORM_TYPE_DESKTOP
    },
    {
      name: 'Mouse',
      type: FORM_TYPE_MOUSE
    },
    {
      name: 'Other',
      type: FORM_TYPE_OTHER
    }
  ]

  const handleChangeFilter = type => {
    if(type === 'all') {
      setDevices([...originalDevices]);
      return;
    }
    const filteredArray = originalDevices.filter(item => item.type === type);
    setDevices([...filteredArray]);
  }

  useEffect(() => {
    const getDevices = async () => {
      const uri = process.env.REACT_APP_BASE_API_URL + '/devices';
      const response = await fetch(uri);
      const devices = await response.json();

      setDevices([...devices]);
      setOriginalDevices([...devices]);
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

        <ArrayFilter filterList={filterList} handleChangeFilter={(type) => handleChangeFilter(type)} />

        {devices && <DeviceList
          devices={devices} />}
      </div>
    </>
  )
}

export default DeviceListPage;