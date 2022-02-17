import React, { createElement, useState } from 'react';

import './style.css';

const Paginator = (props) => {
  const { lastPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const renderNumberButton = (isActive, number) => {
    if (isActive) {
      return (<div className='button active' onClick={(e) => handleClickNumber(e)}>{number}</div>);
    }
    return (<div className='button' onClick={(e) => handleClickNumber(e)}>{number}</div>);
  }

  const renderNumbers = () => {
    if (currentPage < lastPage) {
      if (lastPage <= 3) {
        let buttons = [];
        for (let i = 1; i <= lastPage; i++) {
          if (currentPage === i) {
            buttons.push(renderNumberButton(true, i));
          } else {
            buttons.push(renderNumberButton(false, i));
          }
        }
        return buttons;
      }

      if (lastPage > 3) {
        if (currentPage === 1) {
          return (
            <>
              <div className='button active' onClick={(e) => handleClickNumber(e)}>1</div>
              <div className='button' onClick={(e) => handleClickNumber(e)}>2</div>
              <div className='button' onClick={(e) => handleClickNumber(e)}>3</div>
            </>
          )
        }
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
          <div className='button' onClick={(e) => handleClickNumber(e)}>{lastPage - 2}</div>
          <div className='button' onClick={(e) => handleClickNumber(e)}>{lastPage - 1}</div>
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
    if (newPageNumber) {
      setCurrentPage(newPageNumber);
    }
  }

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleClickNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
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