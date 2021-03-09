import {
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  categories: [],
  error: null,
  categoryLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        categoryLoading: false,
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
        categoryLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        categoryLoading: true,
      };
    default:
      return state;
  }
};
