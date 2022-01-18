import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Test from '../../pages/TestPage';

import DeviceTypePicker from './DeviceTypePicker/DeviceTypePicker';
import LaptopForm from './SpecificForms/LaptopForm';
import DesktopForm from './SpecificForms/DesktopForm';
import MouseForm from './SpecificForms/MouseForm';
import OtherForm from './SpecificForms/OtherForm';
import { declareNewDevice } from '../../app/redux';

import './style.css';

class DeclareForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: props.userId,
      images: [],
      error: null
    }
  }

  handleSubmit = (formData) => {
    formData.userId = this.state.userId;
    formData.images = this.state.images;
    this.props.submit(formData);
  }

  handleAddImage = (image) => {
    const images = this.state.images;
    images.push(image);
    this.setState({images: images});
  }

  render() {
    return <div className='content'>
      <DeviceTypePicker />
      <Routes>
        <Route path='/' element={<Navigate to='laptop' />} />
        <Route path='/laptop' element={<LaptopForm handleSubmit={(formData) => this.handleSubmit(formData)} handleAddImage={(image) => this.handleAddImage(image)} />} />
        <Route path='/desktop' element={<DesktopForm handleSubmit={(formData) => this.handleSubmit(formData)} handleAddImage={(image) => this.handleAddImage(image)} />} />
        <Route path='/mouse' element={<MouseForm handleSubmit={(formData) => this.handleSubmit(formData)} handleAddImage={(image) => this.handleAddImage(image)} />} />
        <Route path='/other' element={<OtherForm handleSubmit={(formData) => this.handleSubmit(formData)} handleAddImage={(image) => this.handleAddImage(image)} />} />
      </Routes>
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
    submit: (formData) => dispatch(declareNewDevice(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeclareForm);