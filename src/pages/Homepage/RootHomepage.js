import React, { Component } from 'react';
import { connect } from 'react-redux';

import Homepage from './Homepage';
import AdminHomepage from './AdminHomepage';
import LoginPage from '../LoginPage/LoginPage';
import { getIdOfCollection } from '../../app/data/metadataActions';
import { METADATA_NUMBER_OF_DEVICES_KEYWORD, METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD } from '../../app/utilities';

class RootHomepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    const numberOfDevicesCollectionId = await getIdOfCollection(METADATA_NUMBER_OF_DEVICES_KEYWORD);
    const numberOfRequestCollectionId = await getIdOfCollection(METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD);

    localStorage.setItem(METADATA_NUMBER_OF_DEVICES_KEYWORD, numberOfDevicesCollectionId);
    localStorage.setItem(METADATA_NUMBER_OF_PENDING_REQUESTS_KEYWORD, numberOfRequestCollectionId);
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