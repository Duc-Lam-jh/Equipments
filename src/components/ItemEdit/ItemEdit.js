import React from 'react';
import { Form } from 'react-final-form';
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

export default ItemEdit;