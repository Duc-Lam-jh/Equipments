import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import ImageInput from '../../ImageInput/ImageInput';

import { FORM_TYPE_DESKTOP } from '../../../app/utilities/index';

class DesktopForm extends Component {

  handleSubmit = (formData) => {
    formData.type = FORM_TYPE_DESKTOP;
    this.props.handleSubmit(formData);
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
                  </label>
                    <div className='input'>
                      <select {...input} form='DesktopForm'>
                        <option value="sweet-cake">Sweet Cake</option>
                        <option value="yin-yang">Yin Yang</option>
                        <option value="design">Design</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                </>
              )}
            </Field>

            <Field name="brand">
              {({ input }) => (
                <>
                  <label>Brand
                  </label>
                    <div className='input'>
                      <input {...input} type="text" placeholder="Hãng màn hình..." required={true}/>
                    </div>
                </>
              )}
            </Field>

            <Field name="size">
              {({ input }) => (
                <>
                  <label>Size
                  </label>
                    <div className='input'>
                      <input {...input} type="text" placeholder="Kích thước màn hình..." required={true}/>
                    </div>
                </>
              )}
            </Field>

            <Field name="configuration">
              {({ input }) => (
                <>
                  <label>Configuration
                  </label>
                    <div className='input'>
                      <input {...input} type="text" placeholder="Cấu hình màn hình..." required={true}/>
                    </div>
                </>
              )}
            </Field>

            <Field name="image">
              {() => (
                <>
                  <label>Image
                  </label>
                  <label className="image"><ImageInput onChange={(image) => this.props.handleAddImage(image)} /></label>
                </>
              )}
            </Field>

            <div className='col-span2'>
              <button type="submit">Save</button>
            </div>
          </form>
        )
        }
      />
    </>;
  }
}

export default DesktopForm;