import React, { Component } from 'react';
import { connect } from 'react-redux';

import Homepage from './Homepage';
import AdminHomepage from './AdminHomepage';
import LoginPage from '../loginPage/LoginPage';

class RootHomepage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const userEmail = this.props.userEmail;
    const userRole = this.props.userRole;

    if(!userEmail) {
      return <LoginPage />;
    }

    switch (userRole) {
      case 'admin':
        return <AdminHomepage />;
      case 'user':
        return <Homepage />;
      default:
        return <LoginPage />;
    }
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.auth.userEmail,
  userRole: state.auth.userRole
});

export default connect(mapStateToProps)(RootHomepage);