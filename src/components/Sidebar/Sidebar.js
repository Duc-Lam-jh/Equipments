import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../app/img/logo-white.png';

import SidebarItem from './SidebarItem/SidebarItem';
import { signOut } from '../../app/redux';

import './style.css'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      signOut: () => props.signOut()
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
        <div className='item button' onClick={this.state.signOut}><p>Log out</p></div>
      </div>
    </>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);