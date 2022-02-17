import React, { useState } from 'react';

import './style.css';

const Paginator = (props) => {
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <div className='paginator-container'>Paginator</div>
  )
}

export default Paginator;