import { GET_CATEGORIES, CATEGORIES_ERROR, SET_LOADING } from './types';

// Get categories from server

export const getCategories = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('http://localhost:19000/api/category/list');
    const data = await res.json();

    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
