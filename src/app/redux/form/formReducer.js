import actionTypes from './formActionTypes';

const initialState = {
  error: null,
  msg: null,
  loading: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_PROMPT:
      return {
        ...state,
        error: null,
        loading: null,
        msg: action.msg
      };
    case actionTypes.FORM_ERROR:
      return {
        ...state,
        loading: null,
        msg: null,
        error: action.error,
      }
    case actionTypes.FORM_LOADING:
      return {
        ...state,
        loading: action.msg,
        msg: null,
        error: null,
      }
    default:
      return state;
  }
}

export default formReducer;