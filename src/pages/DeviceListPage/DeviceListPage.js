import React, { useState, useEffect } from 'react';
import { getAllDevices, getFirstPage, getNextPage } from '../../app/data/devicesActions';
import { checkListOverflow } from '../../app/utilities/utilities';

import ArrayFilter from '../../components/ArrayFilter/ArrayFilter';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import DeviceList from '../../components/DeviceList/DeviceList';

import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_MOUSE,
  FORM_TYPE_OTHER,
  ITEMS_PER_PAGE,
  TOGGLE_VIEW_CARD,
  TOGGLE_VIEW_LIST,
} from '../../app/utilities/index'

import listViewIcon from '../../app/img/list-icon.png';
import listViewIcon_Active from '../../app/img/list-icon_active.png';
import cardViewIcon from '../../app/img/card-icon.png';
import cardViewIcon_Active from '../../app/img/card-icon_active.png';

import './style.css';
import Paginator from '../../components/Paginator/Paginator';

const DeviceListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState(TOGGLE_VIEW_CARD);
  const [devices, setDevices] = useState(null);
  const [originalDevices, setOriginalDevices] = useState(null);
  const [lastDevice, setLastDevice] = useState(null);
  const [isLastPage, setIsLastPage] = useState(null);

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

  const loadMoreDevices = async () => {
    const devicesData = await getNextPage(lastDevice);
    const isLastPage = checkListOverflow(devicesData, ITEMS_PER_PAGE);
    setIsLastPage(isLastPage);
    devicesData.shift();

    setLastDevice({ ...devicesData[devicesData.length - 1] });

    setDevices([...devices, ...devicesData]);
    setOriginalDevices([...devices, ...devicesData]);
  }

  useEffect(() => {
    const getDevices = async () => {
      const devices = await getFirstPage();

      setIsLastPage(checkListOverflow(devices, ITEMS_PER_PAGE));

      setLastDevice({ ...devices[devices.length - 1] });

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

        <Paginator
          isLastPage={isLastPage}
          handleChangePage={() => loadMoreDevices()}
        />
      </div>
    </>
  )
}

export default DeviceListPage;