import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import DeviceTypePicker from './DeviceTypePicker/DeviceTypePicker';
import LaptopForm from './SpecificForms/LaptopForm';
import DesktopForm from './SpecificForms/DesktopForm';
import MouseForm from './SpecificForms/MouseForm';
import OtherForm from './SpecificForms/OtherForm';
import MessagePrompt from '../MessagePrompt/MessagePrompt';
import { declareNewDevice, setFormPrompt } from '../../app/redux';
import {
  FORM_TYPE_DESKTOP,
  FORM_TYPE_LAPTOP,
  FORM_TYPE_OTHER,
  WARNING_AT_LEAST_ONE_PICTURE_MESSAGE,
  WARNING_NEED_TO_FILL_ALL_REQUIRED_FIELDS
} from '../../app/utilities/index';

import './style.css';

class DeclareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      userName: props.userName,
      images: [],
    }
  }

  validateFormData = formData => {
    if(!formData.brand){
      return false;
    }

    switch (formData.type) {
      case FORM_TYPE_DESKTOP: {
        if (!formData.configuration || !formData.seriesNumber) {
          return false;
        }
      }
      case FORM_TYPE_LAPTOP: {
        if (!formData.configuration || !formData.size){
          return false;
        }
      }
      case FORM_TYPE_OTHER: {
        if (!formData.description){
          return false;
        }
      }
      default: {
        break;
      }
    }

    return true;
  }

  handleSubmit = (formData) => {
    if (this.state.images.length === 0) {
      this.props.setFormPrompt(WARNING_AT_LEAST_ONE_PICTURE_MESSAGE);
      return;
    }
    if (!this.validateFormData(formData)) {
      this.props.setFormPrompt(WARNING_NEED_TO_FILL_ALL_REQUIRED_FIELDS);
      return;
    }

    formData.userId = this.state.userId;
    formData.images = this.state.images;
    formData.userName = this.state.userName;

    this.props.submit(formData);
  }

  handleAddImage = (images) => {
    this.setState({
      images: [...images]
    })
  }

  render() {
    const msg = this.props.msg;
    const loadingMsg = this.props.loadingMsg;

    return <div className='content'>
      {loadingMsg && <MessagePrompt msg={loadingMsg} />}
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
    userName: state.auth.userName,
    error: state.form.error,
    msg: state.form.msg,
    loadingMsg: state.form.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: formData => dispatch(declareNewDevice(formData)),
    setFormPrompt: msg => dispatch(setFormPrompt(msg)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeclareForm);