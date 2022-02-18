import React from 'react';

import './style.css';

const Paginator = (props) => {
  const { isLastPage } = props;

  return (
    <div className='paginator-container'>
      <div className='paginator-controls'>
        <div className={isLastPage ? 'button disabled' : 'button'} onClick={() => props.handleChangePage()}>See more {'>'}</div>
      </div>
    </div>
  )
}

export default Paginator;