import React from 'react';
import PropTypes from 'prop-types';

const MouseInfo = (props) => {
  const { detail } = props;
  const images = detail.images;

  return (
    <div className='info-table'>
      <div className='title'>Brand</div>
      <div>{detail.brand}</div>

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

MouseInfo.defaultProps = {
  detail: {
    brand: 'Chưa có thông tin',
    images: []
  },
}

MouseInfo.propTypes = {
  detail: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
  }).isRequired
}

export default MouseInfo;