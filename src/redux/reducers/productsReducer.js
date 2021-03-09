import {
  GET_PRODUCTS,
  GET_PRODUCT,
  SET_LOADING,
  PRODUCT_ERROR,
} from '../actions/types';

const initialState = {
  products: [],
  product: null,
  error: null,
  productLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productLoading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        productLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        productLoading: true,
      };
    default:
      return state;
  }
};
