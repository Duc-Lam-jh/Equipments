import React from 'react';
import './style.css';

const ToggleButton = (props) => {
  const { buttonList } = props;

  return (
    <>
    <div className='toggle-button'>
      <div className='item'>alo</div>
      <div className='item inactive'>alo</div>
    </div>
    </>
  )
}

export default ToggleButton;