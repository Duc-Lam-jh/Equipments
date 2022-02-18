import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import MessagePrompt from '../MessagePrompt/MessagePrompt';
import { requestNewDevice, setFormPrompt } from '../../app/redux';

class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      userName: props.userName
    }
  }

  handleSubmit = (formData) => {
    formData.userId = this.state.userId;
    formData.userName = this.state.userName;
    this.props.submit(formData);
  }

  render() {
    return <div className='content'>
      {this.props.msg && <MessagePrompt msg={this.props.msg} button={{ text: 'OK' }} handleClick={() => { this.props.setFormPrompt(null) }} />}
      {this.props.loadingMsg && <MessagePrompt msg={this.props.loadingMsg} />}
      <h2>Fill in the form to request a new device</h2>
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit }) => (
          <form id='RequestForm' className="declareForm" onSubmit={handleSubmit} encType='multipart/form-data'>

            <Field name="team" component="select" defaultValue="yin-yang">
              {({ input }) => (
                <>
                  <label>Team
                  </label>
                  <div className='input'>
                    <select {...input} form='RequestForm'>
                      <option value="sweet-cake">Sweet Cake</option>
                      <option value="yin-yang">Yin Yang</option>
                      <option value="design">Design</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </>
              )}
            </Field>

            <Field name="type" component="select" defaultValue="desktop">
              {({ input }) => (
                <>
                  <label>Type of device
                  </label>
                  <div className='input'>
                    <select {...input} form='RequestForm'>
                      <option value="desktop">Desktop</option>
                      <option value="laptop">Laptop</option>
                      <option value="mouse">Mouse</option>
                    </select>
                  </div>
                </>
              )}
            </Field>

            <Field name="reason">
              {({ input }) => (
                <>
                  <label>Reason
                  </label>
                  <div className='input'>
                    <input {...input} type="text" placeholder="Lý do cần thiết bị mới..." required={true} />
                  </div>
                </>
              )}
            </Field>

            <div className='col-span2'>
              <button type="submit">Request</button>
            </div>
          </form>
        )
        }
      />
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    userName: state.auth.userName,
    msg: state.form.msg,
    loadingMsg: state.form.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (formData) => dispatch(requestNewDevice(formData)),
    setFormPrompt: msg => dispatch(setFormPrompt(msg)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);