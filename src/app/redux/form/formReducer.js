import actionTypes from './formActionTypes';

const initialState = {
  error: null,
  msg: null
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_PROMPT:
      return {
        ...state,
        error: null,
        msg: action.msg
      };
    case actionTypes.FORM_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state;
  }
}

export default formReducer;