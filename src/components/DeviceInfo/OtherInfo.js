import React from 'react';

const OtherInfo = (props) => {
  const { detail } = props;
  const images = detail.images;
  console.log(images);

  return (
    <div className='info-table'>
      <div className='title'>Brand</div>
      <div>{detail.brand}</div>

      <div className='title'>Description</div>
      <div>{detail.description}</div>

      <div className='images'>
        {images.map((image, index) => {
          return (
            <img key={index} src={image} />
          )
        })}
      </div>

    </div>
  )
}

export default OtherInfo;