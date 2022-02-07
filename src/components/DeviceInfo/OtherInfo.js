import React from 'react';
import PropTypes from 'prop-types';

const OtherInfo = (props) => {
  const { detail } = props;
  const images = detail.images;

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

OtherInfo.defaultProps = {
  detail: {
    brand: 'Chưa có thông tin',
    description: 'Chưa có thông tin',
    images: []
  },
}

OtherInfo.propTypes = {
  detail: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
  }).isRequired
}

export default OtherInfo;