import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../app/img/logo-white.png';
import menuIcon from '../../app/img/menu-icon.png';
import closeIcon from '../../app/img/close-icon.png';

import SidebarItem from './SidebarItem/SidebarItem';
import { signOut } from '../../app/redux';
import { LOGO_SIZE, MENU_BUTTON_SIZE } from '../../app/utilities';

import './style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      signOut: () => props.signOut()
    }
  }

  toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar');
    const menuIconImg = sidebar.querySelector('#menu-icon-img');

    if (sidebar.classList.contains('inactive')) {
      sidebar.classList.remove('inactive');
      menuIconImg.src = closeIcon;
    } else {
      sidebar.classList.add('inactive');
      menuIconImg.src = menuIcon;
    }

  }

  render() {
    const sidebarItems = this.state.items.map((item, index) => <NavLink className='item' key={index} to={item.path} 
    onClick={this.toggleSidebar} ><SidebarItem title={item.title} /></NavLink>);
    return <>
      <div id='sidebar' className="sidebar inactive">
        <div className='sidebar-button' onClick={this.toggleSidebar}>
          <img id='menu-icon-img' src={menuIcon} width={MENU_BUTTON_SIZE} />
        </div>
        <Link to='/' className='logo'>
          <img src={logo} width={LOGO_SIZE} />
          <p>Journey Horizon</p>
        </Link>
        {sidebarItems}
        <div className='item button' onClick={this.state.signOut}><p>Log out</p></div>
      </div>
    </>;
  }
}

Sidebar.defaultProps = {
  items: [
    {
      path: '/',
      title: 'Home'
    }
  ]
}

Sidebar.propsType = {
  items: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);