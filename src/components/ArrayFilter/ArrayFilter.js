import React from 'react';
import './style.css';

const ArrayFilter = (props) => {
  const { filterList } = props;

  const handleChangeFilter = (type) => {
    const buttons = document.querySelectorAll('.filter-item');
    buttons.forEach(item => {
      if(item.id === type){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
    props.handleChangeFilter(type);
  }

  const renderFilter = () => {
    const filters = filterList.map(item => {
      return (
        <div id={item.type} key={item.type} className='filter-item' onClick={() => handleChangeFilter(item.type)}>{item.name}</div>
      )
    })

    return filters;
  }

  return (
    <>
      <div className='device-type-picker'>
        {renderFilter()}
      </div>
    </>
  )
}

export default ArrayFilter;