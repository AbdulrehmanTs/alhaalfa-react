import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

export default combineReducers({
  product: productsReducer,
  category: categoryReducer,
  cartItems: cartReducer,
  auth: authReducer,
});
