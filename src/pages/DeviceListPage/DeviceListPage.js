import React, { useState, useEffect } from 'react';
import { getAllDevices, getNumberOfDevices } from '../../app/data/devicesActions';

import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import DeviceList from '../../components/DeviceList/DeviceList';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  TOGGLE_VIEW_CARD,
  TOGGLE_VIEW_LIST,
} from '../../app/utilities/index'

import listViewIcon from '../../app/img/list-icon.png';
import listViewIcon_Active from '../../app/img/list-icon_active.png';
import cardViewIcon from '../../app/img/card-icon.png';
import cardViewIcon_Active from '../../app/img/card-icon_active.png';

import './style.css';
import Paginator from '../../components/Paginator/Paginator';
import { calculateNumberOfPages } from '../../app/utilities/utilities';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState(TOGGLE_VIEW_CARD);
  const [devices, setDevices] = useState(null);
  const [originalDevices, setOriginalDevices] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(1);

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
      inactiveIcon: cardViewIcon,
      isDefault: true
    },
    {
      name: 'List view',
      type: TOGGLE_VIEW_LIST,
      activeIcon: listViewIcon_Active,
      inactiveIcon: listViewIcon
    }
  ]

  const filterDeviceList = type => {
    if (type === 'all') {
      setDevices([...originalDevices]);
      return;
    }
    const filteredArray = originalDevices.filter(item => item.type === type);
    setDevices([...filteredArray]);
  }

  const changeView = (type) => {
    setView(type);
  }

  useEffect(() => {
    const getDevices = async () => {
      const numberOfDevices = await getNumberOfDevices();
      const numberOfPages = calculateNumberOfPages(numberOfDevices, 20);
      setNumberOfPages(numberOfPages);

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

        <ArrayFilter title='Filter' filterList={filterList} handleFilterArray={(type) => filterDeviceList(type)} />
        <ToggleButton buttonList={toggleButtonList} handleToggleButton={(type) => changeView(type)} />

        {devices && <DeviceList
          devices={devices} listStyle={view} />}

        <Paginator lastPage={numberOfPages} />
      </div>
    </>
  )
}

export default DeviceListPage;