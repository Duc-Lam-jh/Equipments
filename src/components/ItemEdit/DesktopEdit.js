import React from 'react';
import { Field, Form } from 'react-final-form';

const DesktopEdit = (props) => {
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
                  <div className='title'>Configuration</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.configuration} />
                  </div>
                </>
              )}
            </Field>

            <Field name="size">
              {({ input, meta }) => (
                <>
                  <div className='title'>Size</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.size} />
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

export default DesktopEdit;