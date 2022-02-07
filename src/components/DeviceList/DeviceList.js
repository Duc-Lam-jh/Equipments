import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeviceList = (props) => {
  const { devices } = props;

  useEffect(() => {
    const renderDevices = () => {
    

    }

  }, [])


  return (
    <>
      <div className='device-list-container'>
        <div className='item'>
          <div className='device-type'>Laptop/PC</div>
          <div className='image'
            style={{
              backgroundImage: 'url(https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/c419.94.263.263a/p960x960/273049184_2142152845932809_3457391526845144560_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=YDAaNZ_unSIAX8ET_Az&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-byjw7pHzq_v2hCJGFIHLtuoLpgNdZFtwJKSWb5gJEVw&oe=6204CA47)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}>
          </div>
          <div className='owner'>Owner: Duc Lam</div>
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
        <div className='item'>
          asdasd
        </div>
      </div>
    </>
  )
}

export default DeviceList;