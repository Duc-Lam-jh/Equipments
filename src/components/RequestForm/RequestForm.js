import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { requestNewDevice } from '../../app/redux';

class RequestForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: props.userId
    }
  }

  handleSubmit = (formData) => {
    formData.userId = this.state.userId;
    this.props.submit(formData);
  }

  render() {
    return <div className='content'>
      <h2>Fill in the form to request a new device</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='RequestForm' className="declareForm" onSubmit={handleSubmit} encType='multipart/form-data'>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                    <div className='input'>
                      <select {...input} form='RequestForm'>
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

            <Field name="type" component="select" defaultValue="desktop">
              {({ input }) => (
                <>
                  <label>Type of device
                    <div className='input'>
                      <select {...input} form='RequestForm'>
                        <option value="desktop">Desktop</option>
                        <option value="laptop">Laptop</option>
                        <option value="mouse">Mouse</option>
                      </select>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <Field name="reason">
              {({ input }) => (
                <>
                  <label>Reason
                    <div className='input'>
                      <input {...input} type="text" placeholder="Lý do cần thiết bị mới..." required={true}/>
                    </div>
                  </label>
                </>
              )}
            </Field>

            <button type="submit">Request</button>
          </form>
        )
        }
      />
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (formData) => dispatch(requestNewDevice(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);