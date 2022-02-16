import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import ImageInput from '../../ImageInput/ImageInput';

import { FORM_TYPE_LAPTOP, LOADING_MESSAGE } from '../../../app/utilities/index';
import { setLoadingPrompt } from '../../../app/redux';
import { getNumberOfDeviceOfUserByType } from '../../../app/data/devicesActions';

class LaptopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      isLaptopDeclared: false
    }
  }


  componentDidMount = () => {
    this.props.setLoading(LOADING_MESSAGE);
    getNumberOfDeviceOfUserByType(this.state.userId, FORM_TYPE_LAPTOP)
      .then(numberOfLaptop => {
        if (numberOfLaptop > 0) {
          this.setState({ isLaptopDeclared: true });
        } else {
          this.setState({ isLaptopDeclared: false });
        }
        this.props.setLoading(null)
      })
  }

  handleSubmit = (formData) => {
    formData.type = FORM_TYPE_LAPTOP;
    this.props.handleSubmit(formData);
    this.setState({ isLaptopDeclared: true });
  }

  handleAddImage = (image) => {
    this.props.handleAddImage(image);
  }

  render() {
    if (this.state.isLaptopDeclared) {
      return <>
        <h2>You already declared a laptop</h2>
      </>
    }

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
                  </label>
                  <div className='input'>
                    <select {...input} form='laptopForm'>
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
                    <input {...input} type="text" placeholder="Hãng máy..." required={true} />
                  </div>
                </>
              )}
            </Field>

            <Field name="configuration">
              {({ input }) => (
                <>
                  <label>Processor
                  </label>
                  <div className='input'>
                    <input {...input} type="text" placeholder="Cấu hình máy tính..." required={true} />
                  </div>
                </>
              )}
            </Field>

            <Field name="seriesNumber">
              {({ input }) => (
                <>
                  <label>Serial number
                  </label>
                  <div className='input'>
                    <input {...input} type="text" placeholder="Số series của máy..." required={true} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: msg => dispatch(setLoadingPrompt(msg))
  }
}

export default connect(null, mapDispatchToProps)(LaptopForm);