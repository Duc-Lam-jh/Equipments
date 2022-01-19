import React from 'react';

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

export default UserInfo;