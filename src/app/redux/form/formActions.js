import actionTypes from './formActionTypes';

import { SUCCESS_MESSAGE } from '../index';

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
  const uri = process.env.REACT_APP_BASE_API_URL + '/devices';

  return (dispatch) => {
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => {
      dispatch(setFormPrompt(SUCCESS_MESSAGE));
    }).catch(error => {
      dispatch(setFormPrompt(error.message));
    })
  }
}

const editDeviceDetail = (formData) => {
  const uri = process.env.REACT_APP_BASE_API_URL + '/devices/' + formData.id;
  return (dispatch) => {
    fetch(uri, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => {
      dispatch(setFormPrompt(SUCCESS_MESSAGE));
    }).catch(error => {
      dispatch(setFormPrompt(error.message));
    })
  }
}

const requestNewDevice = (formData) => {
  const uri = process.env.REACT_APP_BASE_API_URL + '/requests';

  return (dispatch) => {
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => {
      dispatch(setFormPrompt(SUCCESS_MESSAGE));
    }).catch(error => {
      console.log(error);
      dispatch(setFormError(error.message));
    })
  }
}

export {
  setFormPrompt,
  setFormError,
  declareNewDevice,
  requestNewDevice,
  editDeviceDetail
}