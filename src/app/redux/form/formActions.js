import actionTypes from './formActionTypes';

import {
  SUCCESS_MESSAGE,
  LOADING_MESSAGE,
  DECLARE_DEVICE_SUCCESSFUL_MESSAGE,
  REQUEST_DEVICE_SUCCESSFUL_MESSAGE,
  EDIT_DEVICE_SUCCESSFUL_MESSAGE,
  EDIT_REQUEST_SUCCESSFUL_MESSAGE,
  NEED_TO_DECLARE_DEVICE_MESSAGE
} from '../../utilities/index';
import { addNewRequest, editRequestById } from '../../data/requestsActions';
import { addNewDevice, editDeviceById, getNumberOfDeviceOfUserByType } from '../../data/devicesActions';

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
        dispatch(setFormPrompt(DECLARE_DEVICE_SUCCESSFUL_MESSAGE));
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
        dispatch(setFormPrompt(EDIT_DEVICE_SUCCESSFUL_MESSAGE));
      }).catch(error => {
        dispatch(setFormPrompt(error.message));
      })
  }
}

const requestNewDevice = (formData) => {
  formData.status = 'pending';
  formData.date = new Date();

  return (dispatch) => {
    dispatch(setLoadingPrompt(LOADING_MESSAGE));

    getNumberOfDeviceOfUserByType(formData.userId, formData.type)
      .then(numberOfDevice => {
        if (numberOfDevice === 0) {
          dispatch(setFormPrompt(NEED_TO_DECLARE_DEVICE_MESSAGE));
          return;
        }
        addNewRequest(formData)
          .then(() => {
            dispatch(setFormPrompt(REQUEST_DEVICE_SUCCESSFUL_MESSAGE));
          }).catch(error => {
            dispatch(setFormError(error.message));
          })
      })
  }
}

const editRequest = (requestData) => {
  return (dispatch) => {
    editRequestById(requestData)
      .then(() => {
        dispatch(setFormPrompt(EDIT_REQUEST_SUCCESSFUL_MESSAGE));
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