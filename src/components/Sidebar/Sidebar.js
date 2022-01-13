import React, { Component } from 'react'

import SidebarItem from './SidebarItem/SidebarItem';

import './style.css'

class Sidebar extends Component {
  render() {

    return <>
      <div className="sidebar">
        <SidebarItem title="Devices in possession" />
        <SidebarItem title="Declare possession" />
        <SidebarItem title="Request new device" />

      </div>
    </>;
  }
}

export default Sidebar;