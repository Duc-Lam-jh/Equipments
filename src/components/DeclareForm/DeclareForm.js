import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Test from '../../pages/TestPage';

import DeviceTypePicker from './DeviceTypePicker/DeviceTypePicker';
import LaptopForm from './SpecificForms/LaptopForm';
import DesktopForm from './SpecificForms/DesktopForm';
import MouseForm from './SpecificForms/MouseForm';
import OtherForm from './SpecificForms/OtherForm';
import MessagePrompt from '../MessagePrompt/MessagePrompt';
import { declareNewDevice, setFormPrompt } from '../../app/redux';

import './style.css';

class DeclareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      images: [],
    }
  }

  handleSubmit = (formData) => {
    formData.userId = this.state.userId;
    formData.images = this.state.images;
    this.props.submit(formData);
  }

  handleAddImage = (images) => {
    this.setState({
      images: [...images]
    })
  }

  render() {
    const msg = this.props.msg;

    return <div className='content'>
      {msg && <MessagePrompt msg={msg} button={{ text: 'OK' }} handleClick={() => { this.props.setFormPrompt(null) }} />}
      <DeviceTypePicker />
      <Routes>
        <Route path='/' element={<Navigate to='laptop' />} />
        <Route path='/laptop'
          element={<LaptopForm
            handleSubmit={(formData) => this.handleSubmit(formData)}
            handleAddImage={(image) => this.handleAddImage(image)} />}
        />
        <Route path='/desktop'
          element={<DesktopForm
            handleSubmit={(formData) => this.handleSubmit(formData)}
            handleAddImage={(image) => this.handleAddImage(image)} />}
        />
        <Route path='/mouse'
          element={<MouseForm
            handleSubmit={(formData) => this.handleSubmit(formData)}
            handleAddImage={(image) => this.handleAddImage(image)} />}
        />
        <Route path='/other'
          element={<OtherForm
            handleSubmit={(formData) => this.handleSubmit(formData)}
            handleAddImage={(image) => this.handleAddImage(image)} />}
        />
      </Routes>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    error: state.form.error,
    msg: state.form.msg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: formData => dispatch(declareNewDevice(formData)),
    setFormPrompt: msg => dispatch(setFormPrompt(msg)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeclareForm);