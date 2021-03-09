import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { SIGNUP, LOGIN, LOGOUT, USER_LOADED, AUTH_ERROR } from './types';

// Load user

export const loadUser = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');

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
      'http://localhost:5000/auth/register',
      formData,
      config
    );

    dispatch({
      type: SIGNUP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.statusText,
    });
  }
};
