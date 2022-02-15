import React, { useState } from 'react';

import { TOGGLE_BUTTON_SIZE } from '../../app/utilities';

import './style.css';

const ToggleButton = (props) => {
  const { buttonList } = props;
  const [buttons, setButtons] = useState(buttonList);

  const handleToggle = (e, item) => {
    const clickedButton = { ...item };
    const buttonsAfterToggling = [...buttons.map(button => {
      return {
        ...button,
        isDefault: button.name === clickedButton.name ? true : false
      }
    })];
    setButtons([...buttonsAfterToggling]);
  }

  const renderItems = () => {
    const buttonsUI = buttons.map(item => {
      return (
        <div key={item.type}
          className={item.isDefault ? 'item active' : 'item'}
          onClick={(e) => handleToggle(e, item)}
        >
          <img src={item.isDefault ? item.activeIcon : item.inactiveIcon} alt={item.name} width={TOGGLE_BUTTON_SIZE} />
        </div>
      )
    });
    return buttonsUI;
  }

  return (
    <>
      <div className='toggle-button'>
        {buttonList && renderItems()}
      </div>
    </>
  )
}

export default ToggleButton;