import React from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  calTotalItems,
  totals,
} from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const Cart = ({
  cartItems: { cart, price, items },
  removeFromCart,
  calTotalItems,
  totals,
}) => {
  return (
    <>
      {cart.length > 0 ? (
        <div class="basket basket_header">
          {cart.map((item) => (
            <div class="basket__list" key={item._id}>
              <div class="basket__item">
                <a class="basket__preview" href="#">
                  <img class="basket__pic" src={item.imageUrl[0]} alt="" />
                </a>
                <div class="basket__details">
                  <a class="basket__product" href="#">
                    {item.name}
                  </a>
                  <div class="basket__price">
                    <div class="basket__old">RM127</div>
                    <div class="basket__actual">{`RM${item.price}`}</div>
                  </div>
                  <div class="basket__price">
                    <div class="basket__actual">Quantity:&nbsp;</div>
                    <div class="basket__actual">{item.qty}</div>
                  </div>
                </div>
                <button
                  class="basket__remove"
                  onClick={() => {
                    removeFromCart(item._id);
                    calTotalItems();
                    totals();
                  }}
                >
                  <svg class="icon icon-close">
                    <use xlinkHref="/img/sprite.svg#icon-close"></use>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div class="basket__total">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', width: '100%' }}>
                <div class="basket__text">Total Items:</div>
                <div class="basket__text">{items}</div>
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                <div class="basket__text">Total Amount:</div>
                <div class="basket__text">{`RM${price}`}</div>
              </div>
            </div>
          </div>
          <div class="basket__btns">
            <Link class="basket__btn btn btn_green" to="/checkout">
              Checkout{' '}
            </Link>

            <Link class="basket__btn btn btn_border" to="/cart">
              Edit Cart
            </Link>
          </div>
        </div>
      ) : (
        <div class="basket basket_header">
          <div class="basket__total" style={{ marginBottom: '0px' }}>
            <div class="basket__text">No items in cart</div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps, {
  removeFromCart,
  calTotalItems,
  totals,
})(Cart);
