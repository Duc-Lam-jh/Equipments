import React, { createElement, useState } from 'react';
import { NEXT_PAGE_KEYWORD, PREVIOUS_PAGE_KEYWORD } from '../../app/utilities';

import './style.css';

const Paginator = (props) => {
  const { isFirstPage, isLastPage } = props;

  return (
    <div className='paginator-container'>
      <div className='paginator-controls'>
        <button className='button' onClick={() => props.handleChangePage(PREVIOUS_PAGE_KEYWORD)} disabled={isFirstPage}>Prev</button>
        <button className='button' onClick={() => props.handleChangePage(NEXT_PAGE_KEYWORD)} disabled={isLastPage}>Next</button>
      </div>
    </div>
  )
}

export default Paginator;