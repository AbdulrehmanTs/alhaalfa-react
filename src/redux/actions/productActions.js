import { GET_PRODUCTS, GET_PRODUCT, SET_LOADING, PRODUCT_ERROR } from './types';

// Get products from server

export const getProducts = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('http://localhost:19000/api/product/list');
    const data = await res.json();

    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
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
