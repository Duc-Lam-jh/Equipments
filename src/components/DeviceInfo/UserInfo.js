import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  const { detail } = props;
  return (
    <div className='info-table'>
      <div className='title'>Name</div>
      <div>{detail.name}</div>

      <div className='title'>Email</div>
      <div>{detail.email}</div>

      <div className='title'>Team</div>
      <div>{detail.team}</div>
    </div>
  )
}

UserInfo.defaultProps = {
  detail: {
    name: 'Chưa có thông tin',
    email: 'Chưa có thông tin',
    team: 'Chưa có thông tin'
  }
}

UserInfo.propTypes = {
  detail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired
  }).isRequired
}

export default UserInfo;