import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  USER_LOADED,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  UPDATE_INFO,
  AUTH_ERROR,
  CLEAR_ERRORS,
  CLEAR_RESPONSE_MESSAGE,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  responseMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };
    case SIGNUP:
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case FORGOT_PASSWORD:
    case RESET_PASSWORD:
      return {
        ...state,
        responseMessage: action.payload.message,
      };
    case UPDATE_INFO:
      return {
        ...state,
        user: action.payload.user,
        responseMessage: action.payload.message,
      };
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: null,
      };
    default:
      return state;
  }
};
