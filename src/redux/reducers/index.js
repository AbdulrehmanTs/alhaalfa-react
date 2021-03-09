import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  product: productsReducer,
  category: categoryReducer,
  cartItems: cartReducer,
});
