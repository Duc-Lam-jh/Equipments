import React, { Component } from 'react';

import './style.css';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() { 
    return <div className='item'>{this.state.title}</div>;
  }
}
 
export default SidebarItem;