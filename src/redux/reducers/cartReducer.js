import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  TOTAL_ITEMS,
  TOTALS,
  CLEAR_CART,
} from '../actions/types';

const initialState = {
  cart: [],
  currentItem: null,
  totalItems: [],
  totalAmount: [],
  items: 0,
  price: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const inCart = state.cart.find((item) =>
        item._id === action.payload.product._id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.product._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.cart,
              { ...action.payload.product, qty: action.payload.qty },
            ],
      };
    case TOTAL_ITEMS:
      return {
        ...state,
        totalItems: state.cart.map((item) => item.qty),
        totalAmount: state.cart.map((item) => item.qty * item.price),
      };
    case TOTALS:
      return {
        ...state,
        items: state.totalItems.reduce((a, b) => a + b, 0),
        price: state.totalAmount.reduce((a, b) => a + b, 0),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.product._id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
