import actionTypes from './formActionTypes';

import {
  SUCCESS_MESSAGE,
  LOADING_MESSAGE,
  DECLARE_DEVICE_SUCCESSFUL,
  REQUEST_DEVICE_SUCCESSFUL,
  EDIT_DEVICE_SUCCESSFUL,
  EDIT_REQUEST_SUCCESSFUL
} from '../../utilities/index';
import { addNewRequest, editRequestById } from '../../data/requestsActions';
import { addNewDevice, editDeviceById } from '../../data/devicesActions';

const setLoadingPrompt = msg => {
  return {
    type: actionTypes.FORM_LOADING,
    msg: msg
  }
}

const setFormPrompt = msg => {
  return {
    type: actionTypes.FORM_PROMPT,
    msg: msg
  }
}

const setFormError = error => {
  return {
    type: actionTypes.FORM_ERROR,
    error: error
  }
}

const declareNewDevice = (formData) => {
  return (dispatch) => {
    dispatch(setLoadingPrompt(LOADING_MESSAGE));
    addNewDevice(formData)
      .then(() => {
        dispatch(setFormPrompt(DECLARE_DEVICE_SUCCESSFUL));
      }).catch(error => {
        dispatch(setFormPrompt(error.message));
      })
  }
}

const editDeviceDetail = (formData) => {
  return (dispatch) => {
    dispatch(setLoadingPrompt(LOADING_MESSAGE));
    editDeviceById(formData)
      .then(() => {
        dispatch(setFormPrompt(EDIT_DEVICE_SUCCESSFUL));
      }).catch(error => {
        dispatch(setFormPrompt(error.message));
      })
  }
}

const requestNewDevice = (formData) => {
  formData.status = 'pending';

  return (dispatch) => {
    addNewRequest(formData)
      .then(() => {
        dispatch(setFormPrompt(REQUEST_DEVICE_SUCCESSFUL));
      }).catch(error => {
        dispatch(setFormError(error.message));
      })
  }
}

const editRequest = (requestData) => {
  return (dispatch) => {
    editRequestById(requestData)
      .then(() => {
        dispatch(setFormPrompt(EDIT_REQUEST_SUCCESSFUL));
      }).catch(error => {
        dispatch(setFormError(error.message));
      })
  }
}

export {
  setFormPrompt,
  setFormError,
  setLoadingPrompt,
  declareNewDevice,
  requestNewDevice,
  editDeviceDetail,
  editRequest
}