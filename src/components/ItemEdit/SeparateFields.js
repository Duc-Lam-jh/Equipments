import React from 'react';
import { Field } from 'react-final-form';

import { FORM_TYPE_DESKTOP, FORM_TYPE_LAPTOP, FORM_TYPE_MOUSE, FORM_TYPE_OTHER } from '../../app/utilities/index';

const SeparateFields = (props) => {
  const { detail } = props;

  const renderDesktopFields = () => {
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
  }
  
  const renderLaptopFields = () => {
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
  }
  
  const renderOtherFields = () => {
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
  }

  switch (detail.type) {
    case FORM_TYPE_DESKTOP:
      return renderDesktopFields();
    case FORM_TYPE_LAPTOP:
      return renderLaptopFields();
    case FORM_TYPE_OTHER:
      return renderOtherFields();
    default:
      return null;
  }
}

export default SeparateFields;