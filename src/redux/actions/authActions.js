import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
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
} from './types';

// Load user

export const loadUser = (token) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:19000/api/user/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading();
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.data.error });
  }
};

// User signup

export const signUp = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:19000/api/auth/register',
      formData,
      config
    );

    const token = res.data.token;

    dispatch({
      type: SIGNUP,
      payload: res.data,
    });

    loadUser(token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

// User login

export const login = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:19000/api/auth/login',
      formData,
      config
    );

    const token = res.data.token;

    dispatch({
      type: LOGIN,
      payload: res.data,
    });

    loadUser(token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Forgot password

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:19000/api/auth/forgot',
      formData,
      config
    );

    dispatch({
      type: FORGOT_PASSWORD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Reset Password

export const resetPassword = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      'http://localhost:19000/api/auth/resetpasswod',
      formData,
      config
    );

    dispatch({
      type: RESET_PASSWORD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Update user info

export const updateInfo = (formData) => async (dispatch) => {
  try {
    const res = await axios({
      method: 'put',
      url: 'http://localhost:19000/api/user',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
      data: { profile: formData },
    });

    dispatch({
      type: UPDATE_INFO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data.error,
    });
  }
};

// User logout

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Clear errors

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// Clear response message

export const clearResponseMessage = () => {
  return {
    type: CLEAR_RESPONSE_MESSAGE,
  };
};

// Set loading

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
