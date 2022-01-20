import React from 'react';
import { Link } from 'react-router-dom';

const DeviceList = () => {

  return(
    <>
      <div className='content'>
        <Link to='1'>1</Link>
        <Link to='2'>2</Link>
        <Link to='3'>3</Link>
      </div>
    </>
  )
}

export default DeviceList;