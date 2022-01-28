import React from 'react';
import PropTypes from 'prop-types';

const LaptopInfo = (props) => {
  const { detail } = props;
  const images = detail.images;

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
            <img key={index} src={image} />
          )
        })}
      </div>

    </div>
  )
}

LaptopInfo.defaultProps = {
  detail: {
    brand: 'Chưa có thông tin',
    configuration: 'Chưa có thông tin',
    seriesNumber: 'Chưa có thông tin',
    images: []
  },
}

LaptopInfo.propTypes = {
  detail: PropTypes.object.isRequired
}

export default LaptopInfo;