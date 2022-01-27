import React from 'react';
import { Field, Form } from 'react-final-form';

import ImageInput from '../ImageInput/ImageInput';
import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities/index';

const ItemEdit = (props) => {
  const { detail, images } = props;
  const deviceType = detail.type;

  const renderSeparateFields = () => {
    switch (deviceType) {
      case FORM_TYPE_DESKTOP:
        return (
          <>
            <Field name="configuration">
              {({ input, meta }) => (
                <>
                  <div className='title'>Configuration</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.configuration} required />
                  </div>
                </>
              )}
            </Field>

            <Field name="size">
              {({ input, meta }) => (
                <>
                  <div className='title'>Size</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.size} required />
                  </div>
                </>
              )}
            </Field>
          </>
        )
      case FORM_TYPE_LAPTOP:
        return (
          <>
            <Field name="configuration">
              {({ input, meta }) => (
                <>
                  <div className='title'>Processor</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.configuration} required />
                  </div>
                </>
              )}
            </Field>

            <Field name="seriesNumber">
              {({ input, meta }) => (
                <>
                  <div className='title'>Serial number</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.seriesNumber} required />
                  </div>
                </>
              )}
            </Field>
          </>
        )
      case FORM_TYPE_OTHER:
        return (
          <>
            <Field name="description">
              {({ input, meta }) => (
                <>
                  <div className='title'>Description</div>
                  <div className='input'>
                    <input {...input} type="text" placeholder={detail.description} required />
                  </div>
                </>
              )}
            </Field>
          </>
        )
      default:
        return;
    }
  }

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

            {renderSeparateFields()}

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