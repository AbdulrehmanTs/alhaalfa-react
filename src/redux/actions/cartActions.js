import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  TOTAL_ITEMS,
  CLEAR_CART,
  TOTALS,
} from './types';

// Add items to cart

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { product, qty: quantity },
  };
};

// Remove items from  cart

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

// Empty cart

export const emptyCart = () => {
  return {
    type: CLEAR_CART,
  };
};

// Adjust items quantity

export const adjustQuantity = (product, quantity) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      product,
      qty: quantity,
    },
  };
};

// Caclulate total items & price for each item

export const calTotalItems = () => {
  return {
    type: TOTAL_ITEMS,
  };
};

// Calculate totals

export const totals = () => {
  return {
    type: TOTALS,
  };
};
