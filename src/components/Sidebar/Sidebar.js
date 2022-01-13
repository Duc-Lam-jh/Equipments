import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../app/img/logo-white.png';

import SidebarItem from './SidebarItem/SidebarItem';

import './style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    }
  }

  render() {
    const sidebarItems = this.state.items.map((item, index) => <NavLink className='item' key={index} to={item.path}><SidebarItem title={item.title} /></NavLink>);
    return <>
      <div className="sidebar">
        <Link to='/' className='logo'>
          <img src={logo} width={50}/> 
          <p>Journey Horizon</p>
        </Link>
        {sidebarItems}
      </div>
    </>;
  }
}

export default Sidebar;