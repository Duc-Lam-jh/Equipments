import React, { useState } from 'react';

import './style.css';

const Paginator = (props) => {
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className='paginator-container'>
      <div className='paginator-controls'>
        <button className='button'>Prev</button>
        <div className='button active'>1</div>
        <div className='button'>2</div>
        <div className='button'>3</div>
        <button className='button'>Next</button>
      </div>

      <div className='page-number-input'>
        <input type='number'/>
        <button>Go</button>
      </div>
    </div>
  )
}

export default Paginator;