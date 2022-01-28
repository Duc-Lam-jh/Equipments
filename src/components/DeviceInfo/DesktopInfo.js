import React from 'react';

const DesktopInfo = (props) => {
  const { detail } = props;
  const images = detail.images;

  return (
    <div className='info-table'>
      <div className='title'>Brand</div>
      <div>{detail.brand}</div>

      <div className='title'>Configuration</div>
      <div>{detail.configuration}</div>

      <div className='title'>Size</div>
      <div>{detail.size}</div>

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

DesktopInfo.defaultProps = {
  detail: {
    brand: 'Chưa có thông tin',
    configuration: 'Chưa có thông tin',
    size: 'Chưa có thông tin',
    images: []
  },
}

export default DesktopInfo;