import React from 'react';

const LaptopInfo = (props) => {
  const { detail } = props;
  const images = detail.images;
  console.log(images);

  return (
    <div className='info-table'>
      <div className='title'>Brand</div>
      <div>{detail.brand}</div>

      <div className='title'>Processor</div>
      <div>{detail.configuration}</div>

      <div className='title'>Serial number</div>
      <div>{detail.seriesNumber}</div>

      <div className='images'>
        {images.map((image, index) => {
          return (
            <img key={index} src={image} width="300px" />
          )
        })}
      </div>

    </div>
  )
}

export default LaptopInfo;