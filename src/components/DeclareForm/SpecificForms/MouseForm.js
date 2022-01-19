import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import ImageInput from '../../ImageInput/ImageInput';

import { FORM_TYPE_MOUSE } from '../formTypes';

class MouseForm extends Component {
  handleSubmit = (formData) => {
    formData.type = FORM_TYPE_MOUSE;
    this.props.handleSubmit(formData);
  }

  handleAddImage = (image) => {
    this.props.handleAddImage(image);
  }

  render() {
    return <>
      <h2>Give us information on your mouse</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='MouseForm' className="declareForm" onSubmit={handleSubmit}>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                  </label>
                    <div className='input'>
                      <select {...input} form='MouseForm'>
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
                      <input {...input} type="text" placeholder="Hãng của chuột..." required={true}/>
                    </div>
                </>
              )}
            </Field>

            <Field name="image">
              {() => (
                <>
                  <label>Image
                  </label>
                  <label className="image"><ImageInput onChange={(image) => this.handleAddImage(image)} /></label>
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

export default MouseForm;