import React from 'react';
import { Field, Form } from 'react-final-form';

import ImageInput from '../ImageInput/ImageInput';

const LaptopEdit = (props) => {
  const { detail } = props;
  const images = detail.images;

  const handleSubmit = (formData) => {
    if(!formData.brand) {

    }
    console.log(formData);
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
                    <input {...input} name="brand" type="text" autoComplete='off' placeholder={detail.brand} />
                  </div>
                </>
              )}
            </Field>

            <Field name="configuration">
              {({ input, meta }) => (
                <>
                  <div className='title'>Processor</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.configuration} />
                  </div>
                </>
              )}
            </Field>

            <Field name="seriesNumber">
              {({ input, meta }) => (
                <>
                  <div className='title'>Serial number</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.seriesNumber} />
                  </div>
                </>
              )}
            </Field>

            <div className='images'>
              {images.map((image, index) => {
                return (
                  <img key={index} src={image} />
                )
              })}
            </div>

            <div className='button col-span2'>
              <button type="submit">Save</button>
            </div>
          </form>
        )}
      />
    </>
  )
}

export default LaptopEdit;