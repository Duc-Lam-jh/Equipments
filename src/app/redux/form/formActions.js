import actionTypes from './formActionTypes';

import { SUCCESS_MESSAGE } from '../../utilities/index';
import { addNewRequest, editRequestById } from '../../data/requestsActions';
import { addNewDevice, editDeviceById } from '../../data/devicesActions';

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
    addNewDevice(formData)
      .then(() => {
        dispatch(setFormPrompt(SUCCESS_MESSAGE));
      }).catch(error => {
        dispatch(setFormPrompt(error.message));
      })
  }
}

const editDeviceDetail = (formData) => {
  return (dispatch) => {
    editDeviceById(formData)
      .then(() => {
        dispatch(setFormPrompt(SUCCESS_MESSAGE));
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
        dispatch(setFormPrompt(SUCCESS_MESSAGE));
      }).catch(error => {
        dispatch(setFormError(error.message));
      })
  }
}

const editRequest = (requestData) => {
  return (dispatch) => {
    editRequestById(requestData)
      .then(() => {
        dispatch(setFormPrompt(SUCCESS_MESSAGE));
      }).catch(error => {
        dispatch(setFormError(error.message));
      })
  }
}

export {
  setFormPrompt,
  setFormError,
  declareNewDevice,
  requestNewDevice,
  editDeviceDetail,
  editRequest
}