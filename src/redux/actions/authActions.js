import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { SIGNUP, LOGIN, LOGOUT, USER_LOADED, AUTH_ERROR } from './types';

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

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.statusText });
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
      payload: err.response.statusText,
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
      payload: err.response.statusText,
    });
  }
};

// User logout

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
