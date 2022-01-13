import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class LaptopForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (formData) => {
    formData.type = 'laptop';
    this.props.handleSubmit(formData);
  }

  render() {
    return <>
      <h2>Give us information on your laptop/PC</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='laptopForm' className="declareForm" onSubmit={handleSubmit}>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                    <div className='input'>
                      <select {...input} form='laptopForm'>
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
                      <input {...input} type="text" placeholder="Hãng máy..." required={true} />
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="configuration">
              {({ input }) => (
                <>
                  <label>Processor
                    <div className='input'>
                      <input {...input} type="text" placeholder="Cấu hình máy tính..." required={true} />
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="seriesNumber">
              {({ input }) => (
                <>
                  <label>Series number
                    <div className='input'>
                      <input {...input} type="text" placeholder="Số series của máy..." required={true} />
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

export default LaptopForm;