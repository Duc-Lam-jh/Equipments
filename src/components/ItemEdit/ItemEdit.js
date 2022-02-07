import React from 'react';
import { Form } from 'react-final-form';
import PropTypes from 'prop-types';

import EditItemFields from './EditItemFields';

const ItemEdit = (props) => {
  const { detail, images } = props;

  return (
    <>
      <Form
        onSubmit={props.handleSubmit}
        initialValues={detail}
        render={({ handleSubmit }) => (
          <form className="edit-table" onSubmit={handleSubmit}>

            <EditItemFields images={images} detail={detail} handleAddImage={props.handleAddImage} />

            <div className='button col-span2'>
              <button type="submit">Save</button>
            </div>
          </form>
        )}
      />
    </>
  )
}

ItemEdit.defaultProps = {
  detail: {
    brand: 'Chưa có thông tin',
    configuration: 'Chưa có thông tin',
    size: 'Chưa có thông tin',
    description: 'Chưa có thông tin',
    seriesNumber: 'Chưa có thông tin',
  },
  images: []
}

ItemEdit.propTypes = {
  detail: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    configuration: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
    seriesNumber: PropTypes.string,
  }).isRequired,
  images: PropTypes.array.isRequired
}

export default ItemEdit;