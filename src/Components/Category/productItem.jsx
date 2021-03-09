import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addToCart,
  calTotalItems,
  totals,
} from '../../redux/actions/cartActions';

const ProductItem = ({
  cart: { cart },
  product,
  addToCart,
  calTotalItems,
  totals,
}) => {
  return (
    <div class="product">
      <div class="product__view">
        <Link
          class="product__preview"
          to={{
            pathname: `/product/${product._id}`,
            query: { id: product._id },
          }}
        >
          <img class="product__pic" src={product.imagePath[0]} alt="" />
        </Link>
        {cart.find((item) => item._id === product._id) ? (
          <Link class="product__btn btn btn_green" to="/cart">
            In Cart
          </Link>
        ) : (
          <button
            class="product__btn btn btn_green"
            onClick={() => {
              addToCart(product, 1);
              calTotalItems();
              totals();
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
      <Link
        class="product__name"
        to={{
          pathname: `/product/${product._id}`,
          query: { id: product._id },
        }}
      >
        {product.name}
      </Link>
      <div class="product__details">
        <div class="product__category blue">Set</div>
        <div class="product__price">
          <span class="product__actual">{`RM${product.price}`}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartItems,
});

export default connect(mapStateToProps, {
  addToCart,
  calTotalItems,
  totals,
})(ProductItem);
