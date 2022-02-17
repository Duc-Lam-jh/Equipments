import React, { useState } from 'react';

import './style.css';

const Paginator = (props) => {
  const { lastPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const renderNumbers = () => {
    if (currentPage <= 1) {
      return (
        <>
          <div className='button active' onClick={(e) => handleClickNumber(e)}>1</div>
          <div className='button' onClick={(e) => handleClickNumber(e)}>2</div>
          <div className='button' onClick={(e) => handleClickNumber(e)}>3</div>
        </>
      )
    }

    if (currentPage < lastPage) {
      if (lastPage <= 3) {
        const buttons = [];
        for (let i = 1; i <= lastPage; i++) {
          if (currentPage === i) {
            buttons.push("<div className='button active' onClick={(e) => handleClickNumber(e)}>" + i + "</div>");
          } else {
            buttons.push("<div className='button' onClick={(e) => handleClickNumber(e)}>" + i + "</div>");
          }
        }
        return buttons;
      }

      if (lastPage > 3) {
        return (
          <>
            <div className='button' onClick={(e) => handleClickNumber(e)}>{currentPage - 1}</div>
            <div className='button active' onClick={(e) => handleClickNumber(e)}>{currentPage}</div>
            <div className='button' onClick={(e) => handleClickNumber(e)}>{currentPage + 1}</div>
          </>
        )
      }
    }

    if (currentPage >= lastPage) {
      return (
        <>
          <div className='button' onClick={(e) => handleClickNumber(e)}>{lastPage-2}</div>
          <div className='button' onClick={(e) => handleClickNumber(e)}>{lastPage-1}</div>
          <div className='button active' onClick={(e) => handleClickNumber(e)}>{lastPage}</div>
        </>
      )
    }
  }

  const handleClickNumber = e => {
    const button = e.currentTarget;
    const newPageNumber = Number.parseInt(button.innerHTML);
    setCurrentPage(newPageNumber);
  }

  const handleClickGoToPage = e => {
    const button = e.currentTarget;
    const pageNumberInputContainer = button.parentNode;
    const newPageNumber = Number.parseInt(pageNumberInputContainer.querySelector('#page-number-input').value);
    if(newPageNumber){
      setCurrentPage(newPageNumber);
    }
  }

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className='paginator-container'>
      <div className='paginator-controls'>
        <button className='button' onClick={() => handleClickPrevious()}>Prev</button>
        {renderNumbers()}
        <button className='button' onClick={() => handleClickNext()}>Next</button>
      </div>

      <div className='page-number-input'>
        <input id='page-number-input' type='number' name='pageNumber' />
        <button onClick={(e) => handleClickGoToPage(e)}>Go</button>
      </div>
    </div>
  )
}

export default Paginator;