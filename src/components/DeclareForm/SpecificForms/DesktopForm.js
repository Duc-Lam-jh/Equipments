import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class DesktopForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (formData) => {
    formData.type = 'desktop';
    this.props.handleSubmit(formData);
  }

  render() {
    return <>
      <h2>Give us information on your desktop</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='DesktopForm' className="declareForm" onSubmit={handleSubmit}>

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

            <button type="submit">Save</button>
          </form>
        )
        }
      />
    </>;
  }
}

export default DesktopForm;