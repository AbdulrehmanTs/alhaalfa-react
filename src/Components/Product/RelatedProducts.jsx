import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const RelatedProducts = ({ cart: { cart }, product, addToCart }) => {
  return (
    <div className="slider__slide">
      <div className="product">
        <div className="product__sale">20% OFF</div>
        <div className="product__view">
          <Link
            className="product__preview"
            to={{ pathname: `/product/${product._id}`, product }}
          >
            <img className="product__pic" src={product.imagePath[0]} alt="" />
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
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
        <Link
          className="product__name"
          to={{ pathname: `/product/${product._id}`, product }}
        >
          {product.name}
        </Link>
        <div className="product__details">
          <div className="product__category yellow">Loose</div>
          <div className="product__price">
            <span className="product__old">RM30</span>
            <span className="product__actual">{`RM${product.price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartItems,
});

export default connect(mapStateToProps, { addToCart })(RelatedProducts);
