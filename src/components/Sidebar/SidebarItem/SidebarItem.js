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
    return <p>{this.state.title}</p>;
  }
}
 
export default SidebarItem;