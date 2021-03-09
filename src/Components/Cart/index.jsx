import React from 'react';
import { Link } from 'react-router-dom';
import CartProducts from './CartProducts';
import { connect } from 'react-redux';
import {
  emptyCart,
  totals,
  calTotalItems,
} from '../../redux/actions/cartActions';

/**
 * @author
 * @function Cart
 **/

const Cart = ({ cart: { cart, price }, emptyCart, totals, calTotalItems }) => {
  React.useEffect(() => {
    calTotalItems();
    totals();
  }, [cart]);

  return (
    <>
      <div class="breadcrumbs">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <Link class="breadcrumbs__link" to="/">
                Home Page
              </Link>
            </li>
            <li class="breadcrumbs__item">
              <Link class="breadcrumbs__link" to="/category">
                Categories
              </Link>
            </li>
            <li class="breadcrumbs__item">Shopping Cart</li>
          </ul>
        </div>
      </div>

      <d iv class="cart section">
        <div class="cart__center center">
          <div class="cart__head">
            <div class="cart__box">
              <div class="cart__stage stage">- Your Cart</div>
              <h2 class="cart__title title">Shopping Cart</h2>
            </div>
            {cart.length > 0 && (
              <button
                class="cart__btn btn btn_border"
                onClick={() => emptyCart()}
              >
                Clear All
              </button>
            )}
          </div>
          <div class="cart__row">
            <div class="cart__col">
              <div class="cart__list">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <CartProducts key={item._id} item={item} />
                  ))
                ) : (
                  <h1 style={{ margin: '-20px 0px 20px 0px' }}>
                    Your cart is empty
                  </h1>
                )}
              </div>
            </div>
            {cart.length > 0 ? (
              <div class="cart__col" style={{ marginBottom: '20px' }}>
                <div class="cart__receipt">
                  <div class="cart__category">Cart Total</div>
                  <div class="cart__wrap">
                    <div class="cart__line">
                      <div class="cart__text">Subtotal:</div>
                      <div class="cart__text">{`RM${price}`}</div>
                    </div>
                    <div class="cart__line">
                      <div class="cart__text">Tax:</div>
                      <div class="cart__text">RM0.00</div>
                    </div>
                    <div class="cart__line">
                      <div class="cart__text">Shipping:</div>
                      <div class="cart__text">RM0.00</div>
                    </div>
                    <div class="cart__line cart__line_total">
                      <div class="cart__text">Total:</div>
                      <div class="cart__text">{`RM${price}`}</div>
                    </div>
                  </div>
                  <Link class="cart__btn btn btn_green btn_wide" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </d>
      <div class="newsletter section newsletter_desktop">
        <div class="newsletter__center center">
          <div class="newsletter__container">
            <div class="newsletter__stage stage">- AlhaAlfa Promotion</div>
            <h2 class="newsletter__title title title_mb-md">
              Get Discount & Promotion
            </h2>
            <form class="newsletter__form">
              <div class="newsletter__field field">
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div class="newsletter__btns">
                <button
                  class="newsletter__btn btn btn_green btn_wide"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartItems,
});

export default connect(mapStateToProps, { emptyCart, totals, calTotalItems })(
  Cart
);
