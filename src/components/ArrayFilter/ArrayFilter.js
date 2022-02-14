import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ArrayFilter = (props) => {
  const { filterList } = props;
  const filterContainer = useRef(null);

  const handleChangeFilter = (type) => {
    const container = filterContainer.current;
    const buttons = container.querySelectorAll('.filter-item');
    buttons.forEach(item => {
      if(item.id === type){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
    props.handleFilterArray(type);
  }

  const renderFilter = () => {
    const filters = filterList.map(item => {
      return (
        <div id={item.type} key={item.type} 
        className={item.isDefault ? 'active filter-item' : 'filter-item'} onClick={() => handleChangeFilter(item.type)}>{item.name}</div>
      )
    })

    return filters;
  }

  return (
    <>
      <div className='device-type-picker' ref={filterContainer}>
        {renderFilter()}
      </div>
    </>
  )
}

ArrayFilter.propTypes = {
 filterList: PropTypes.arrayOf(PropTypes.shape({
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired
 }))
}

export default ArrayFilter;