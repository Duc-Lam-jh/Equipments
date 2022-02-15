import React, { useState, useEffect } from 'react';
import { getAllDevices } from '../../app/data/devicesActions';

import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import DeviceList from '../../components/DeviceList/DeviceList';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  TOGGLE_VIEW_CARD,
  TOGGLE_VIEW_LIST
} from '../../app/utilities/index'

import listViewIcon from '../../app/img/list-icon.png';
import listViewIcon_Active from '../../app/img/list-icon_active.png';
import cardViewIcon from '../../app/img/card-icon.png';
import cardViewIcon_Active from '../../app/img/card-icon_active.png';

import './style.css';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [devices, setDevices] = useState(null);
  const [originalDevices, setOriginalDevices] = useState(null);

  const filterList = [
    {
      name: 'All',
      type: 'all',
      isDefault: true
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
  ];

  const toggleButtonList = [
    {
      name: 'Card view',
      type: TOGGLE_VIEW_CARD,
      activeIcon: cardViewIcon_Active,
      inactiveIcon: cardViewIcon
    },
    {
      name: 'List view',
      type: TOGGLE_VIEW_LIST,
      activeIcon: listViewIcon_Active,
      inactiveIcon: listViewIcon
    }
  ]

  const filterDeviceList = type => {
    if(type === 'all') {
      setDevices([...originalDevices]);
      return;
    }
    const filteredArray = originalDevices.filter(item => item.type === type);
    setDevices([...filteredArray]);
  }

  useEffect(() => {
    const getDevices = async () => {
      const devices = await getAllDevices();
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

        <ArrayFilter filterList={filterList} handleFilterArray={(type) => filterDeviceList(type)} />
        <ToggleButton buttonList={toggleButtonList} />

        {devices && <DeviceList
          devices={devices} />}
      </div>
    </>
  )
}

export default DeviceListPage;