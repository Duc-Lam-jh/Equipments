import React from 'react';
import { Field, Form } from 'react-final-form';
import ImageInput from '../ImageInput/ImageInput';

const OtherEdit = (props) => {
  const { detail, images } = props;

  const handleSubmit = (formData) => {
    props.handleSubmit(formData);
  }

  const handleAddImage = (image) => {
    props.handleAddImage(image);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        initialValues={detail}
        render={({ handleSubmit }) => (
          <form className="edit-table" onSubmit={handleSubmit}>

            <Field name="brand">
              {({ input, meta }) => (
                <>
                  <div className='title'>Brand</div>
                  <div className='input'>
                    <input {...input} name="brand" type="text" autoComplete='off' placeholder={detail.brand} required/>
                  </div>
                </>
              )}
            </Field>

            <Field name="description">
              {({ input, meta }) => (
                <>
                  <div className='title'>Description</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.description} required/>
                  </div>
                </>
              )}
            </Field>

            <Field name="image">
              {() => (
                <>
                  <div className='title'>Images
                  </div>
                  <label className="image"><ImageInput images={images} onChange={(image) => handleAddImage(image)} /></label>
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

export default OtherEdit;