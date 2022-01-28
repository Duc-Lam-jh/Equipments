import React from 'react';
import { Field } from 'react-final-form';
import ImageInput from '../ImageInput/ImageInput';

import {
  FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER
} from '../../app/utilities/index';

const EditItemFields = (props) => {
  const { detail, images } = props;

  const renderDesktopFields = () => {
    return (
      <>
        <Field name="size">
          {({ input, meta }) => (
            <>
              <div className='title'>Size</div>
              <div className='input'>
                <input {...input} name="size" type="text" autoComplete='off' placeholder={detail.size} required />
              </div>
            </>
          )}
        </Field>

        <Field name="configuration">
          {({ input, meta }) => (
            <>
              <div className='title'>Configuration</div>
              <div className='input'>
                <input {...input} name="configuration" type="text" autoComplete='off' placeholder={detail.configuration} required />
              </div>
            </>
          )}
        </Field>
      </>
    )
  }

  const renderLaptopFields = () => {
    return (
      <>
        <Field name="seriesNumber">
          {({ input, meta }) => (
            <>
              <div className='title'>Serial number</div>
              <div className='input'>
                <input {...input} name="seriesNumber" type="text" autoComplete='off' placeholder={detail.seriesNumber} required />
              </div>
            </>
          )}
        </Field>

        <Field name="configuration">
          {({ input, meta }) => (
            <>
              <div className='title'>Processor</div>
              <div className='input'>
                <input {...input} name="configuration" type="text" autoComplete='off' placeholder={detail.configuration} required />
              </div>
            </>
          )}
        </Field>
      </>
    )
  }

  const renderMouseFields = () => {
    return null;
  }

  const renderOtherFields = () => {
    return (
      <>
        <Field name="description">
          {({ input, meta }) => (
            <>
              <div className='title'>Description</div>
              <div className='input'>
                <input {...input} name="description" type="text" autoComplete='off' placeholder={detail.description} required />
              </div>
            </>
          )}
        </Field>
      </>
    )
  }

  const renderSeparateFields = (type) => {
    switch (type) {
      case FORM_TYPE_DESKTOP:
        return renderDesktopFields();
      case FORM_TYPE_LAPTOP:
        return renderLaptopFields();
      case FORM_TYPE_MOUSE:
        return renderMouseFields();
      case FORM_TYPE_OTHER:
        return renderOtherFields();
      default:
        return null;
    }
  }

  return(
    <>
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

        {renderSeparateFields(detail.type)}

        <Field name="image">
          {() => (
            <>
              <div className='title'>Images
              </div>
              <label className="image"><ImageInput images={images} onChange={(image) => props.handleAddImage(image)} /></label>
            </>
          )}
        </Field>
    </>
  )

}

export default EditItemFields;