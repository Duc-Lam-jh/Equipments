import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class OtherForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (formData) => {
    formData.type = 'other';
    this.props.handleSubmit(formData);
  }

  render() {
    return <>
      <h2>Give us information on any other devices currently in your hand</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='OtherForm' className="declareForm" onSubmit={handleSubmit}>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                    <div className='input'>
                      <select {...input} form='OtherForm'>
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

            <Field name="description">
              {({ input }) => (
                <>
                  <label>Description
                    <div className='input'>
                      <input {...input} type="text" placeholder="Đó là thiết bị gì..." required={true} />
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
                      <input {...input} type="text" placeholder="Hãng của thiết bị..." required={true} />
                    </div>
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

export default OtherForm;