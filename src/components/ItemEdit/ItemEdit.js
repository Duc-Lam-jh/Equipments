import React from 'react';
import { Field, Form } from 'react-final-form';

import ImageInput from '../ImageInput/ImageInput';
import SeparateFields from './SeparateFields';

const ItemEdit = (props) => {
  const { detail, images } = props; 

  return (
    <>
      <Form
        onSubmit={props.handleSubmit}
        initialValues={detail}
        render={({ handleSubmit }) => (
          <form className="edit-table" onSubmit={handleSubmit}>

            <Field name="brand">
              {({ input, meta }) => (
                <>
                  <div className='title'>Brand</div>
                  <div className='input'>
                    <input {...input} name="brand" type="text" autoComplete='off' placeholder={detail.brand} required />
                  </div>
                </>
              )}
            </Field>

            <SeparateFields detail={detail} />

            <Field name="image">
              {() => (
                <>
                  <div className='title'>Images
                  </div>
                  <label className="image"><ImageInput images={images} onChange={(image) => props.handleAddImage(image)} /></label>
                </>
              )}
            </Field>

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