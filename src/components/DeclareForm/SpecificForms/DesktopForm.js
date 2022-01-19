import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import ImageInput from '../../ImageInput/ImageInput';

import { FORM_TYPE_DESKTOP } from '../formTypes';

class DesktopForm extends Component {
  handleSubmit = (formData) => {
    formData.type = FORM_TYPE_DESKTOP;
    this.props.handleSubmit(formData);
  }

  handleAddImage = (image) => {
    this.props.handleAddImage(image);
  }

  render() {
    return <>
      <h2>Give us information on your desktop</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='DesktopForm' className="declareForm" onSubmit={handleSubmit} encType='multipart/form-data'>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                    <div className='input'>
                      <select {...input} form='DesktopForm'>
                        <option value="sweet-cake">Sweet Cake</option>
                        <option value="yin-yang">Yin Yang</option>
                        <option value="design">Design</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="brand">
              {({ input }) => (
                <>
                  <label>Brand
                    <div className='input'>
                      <input {...input} type="text" placeholder="Hãng màn hình..." required={true}/>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="size">
              {({ input }) => (
                <>
                  <label>Size
                    <div className='input'>
                      <input {...input} type="text" placeholder="Kích thước màn hình..." required={true}/>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="configuration">
              {({ input }) => (
                <>
                  <label>Configuration
                    <div className='input'>
                      <input {...input} type="text" placeholder="Cấu hình màn hình..." required={true}/>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="image">
              {() => (
                <>
                  <label>Image
                    <ImageInput onChange={(image) => this.handleAddImage(image)} />
                  </label>
                </>
              )}
            </Field>

            <button type="submit">Save</button>
          </form>
        )
        }
      />
    </>;
  }
}

export default DesktopForm;