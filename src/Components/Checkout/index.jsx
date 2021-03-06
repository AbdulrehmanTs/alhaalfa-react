import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItems from './CartItems';

/**
 * @author
 * @function Checkout
 **/

const Checkout = ({ cart: { cart, price } }) => {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Home Page
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/category">
                Categories
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/cart">
                Shopping Cart
              </Link>
            </li>
            <li className="breadcrumbs__item">Checkout</li>
          </ul>
        </div>
      </div>
      {cart.length > 0 ? (
        <div className="checkout section js-checkout">
          <div className="checkout__center center">
            <div className="checkout__stage stage">- Almost There</div>
            <h2 className="checkout__title title title_mb-lg">Checkout</h2>
            <div className="checkout__row">
              <div className="checkout__col">
                <div className="checkout__steps">
                  <div className="checkout__step js-checkout-step active">
                    1
                  </div>
                  <div className="checkout__step js-checkout-step">2</div>
                  <div className="checkout__step js-checkout-step">3</div>
                  <div className="checkout__step js-checkout-step">4</div>
                </div>
                <div className="checkout__container">
                  <div className="checkout__item js-checkout-item">
                    <div className="checkout__category">Details</div>
                    <div className="checkout__fieldset">
                      <div className="checkout__field field">
                        <div className="field__label">Email Address</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="checkout__field field">
                        <div className="field__label">Password</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="password"
                            name="password"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="checkout__btn btn btn_green btn_wide js-checkout-btn">
                      Continue
                    </button>
                    <button className="checkout__btn btn btn_border btn_wide js-checkout-btn">
                      Guest Checkout
                    </button>
                  </div>
                  <div className="checkout__item js-checkout-item">
                    <div className="checkout__category">Shipping Details</div>
                    <div className="checkout__fieldset">
                      <div className="checkout__field field">
                        <div className="field__label">Full Name</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="text"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="checkout__field field">
                        <div className="field__label">Street Name</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="text"
                            name="street"
                          />
                        </div>
                      </div>
                      <div className="checkout__line">
                        <div className="checkout__cell">
                          <div className="checkout__field field">
                            <div className="field__label">House Number</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="house"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="checkout__cell">
                          <div className="checkout__field field">
                            <div className="field__label">City</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="city"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout__line">
                        <div className="checkout__cell">
                          <div className="checkout__field field">
                            <div className="field__label">Country</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="country"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="checkout__cell">
                          <div className="checkout__field field">
                            <div className="field__label">ZIP Code</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="checkout__btn btn btn_green btn_wide js-checkout-btn">
                      Continue
                    </button>
                  </div>
                  <div className="checkout__item js-checkout-item">
                    <div className="checkout__category">Billing Details</div>
                    <div className="checkout__fieldset">
                      <label className="checkout__checkbox checkbox">
                        <input
                          className="checkbox__input js-checkout-checkbox"
                          type="checkbox"
                          defaultChecked
                        />
                        <span className="checkbox__in">
                          <span className="checkbox__tick" />
                          <span className="checkbox__text">
                            Same as shipping address
                          </span>
                        </span>
                      </label>
                      <div className="checkout__box js-checkout-box">
                        <div className="checkout__field field">
                          <div className="field__label">Full Name</div>
                          <div className="field__wrap">
                            <input
                              className="field__input"
                              type="text"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="checkout__field field">
                          <div className="field__label">Street Name</div>
                          <div className="field__wrap">
                            <input
                              className="field__input"
                              type="text"
                              name="street"
                            />
                          </div>
                        </div>
                        <div className="checkout__line">
                          <div className="checkout__cell">
                            <div className="checkout__field field">
                              <div className="field__label">House Number</div>
                              <div className="field__wrap">
                                <input
                                  className="field__input"
                                  type="text"
                                  name="house"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="checkout__cell">
                            <div className="checkout__field field">
                              <div className="field__label">City</div>
                              <div className="field__wrap">
                                <input
                                  className="field__input"
                                  type="text"
                                  name="city"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="checkout__line">
                          <div className="checkout__cell">
                            <div className="checkout__field field">
                              <div className="field__label">Country</div>
                              <div className="field__wrap">
                                <input
                                  className="field__input"
                                  type="text"
                                  name="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="checkout__cell">
                            <div className="checkout__field field">
                              <div className="field__label">ZIP Code</div>
                              <div className="field__wrap">
                                <input
                                  className="field__input"
                                  type="text"
                                  name="code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="checkout__btn btn btn_green btn_wide js-checkout-btn">
                      Continue
                    </button>
                  </div>
                  <div className="checkout__item js-checkout-item">
                    <div className="checkout__category">Payment Details</div>
                    <div className="checkout__variants">
                      <label className="checkout__checkbox checkbox js-checkout-payment">
                        <input
                          className="checkbox__input js-checkout-radio"
                          type="radio"
                          name="payment"
                          defaultChecked
                        />
                        <span className="checkbox__in">
                          <span className="checkbox__tick"></span>
                          <span className="checkbox__text">Credit Card</span>
                        </span>
                      </label>
                      <label className="checkout__checkbox checkbox js-checkout-payment">
                        <input
                          className="checkbox__input js-checkout-radio"
                          type="radio"
                          name="payment"
                        />
                        <span className="checkbox__in">
                          <span className="checkbox__tick" />
                          <span className="checkbox__text">
                            Online Banking(FPX)
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="checkout__group">
                      <div className="checkout__el js-checkout-el">
                        <div className="checkout__fieldset">
                          <div className="checkout__field field">
                            <div className="field__label">Card Number</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="tel"
                                name="card"
                              />
                            </div>
                          </div>
                          <div className="checkout__line">
                            <div className="checkout__cell">
                              <div className="checkout__field field">
                                <div className="field__label">Expiry Date</div>
                                <div className="field__wrap">
                                  <input
                                    className="field__input"
                                    type="text"
                                    name="date"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="checkout__cell">
                              <div className="checkout__field field">
                                <div className="field__label">CVV</div>
                                <div className="field__wrap">
                                  <input
                                    className="field__input"
                                    type="tel"
                                    name="cvv"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="checkout__line">
                            <div className="checkout__cell">
                              <div className="checkout__field field">
                                <div className="field__label">Country</div>
                                <div className="field__wrap">
                                  <input
                                    className="field__input"
                                    type="text"
                                    name="country"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="checkout__cell">
                              <div className="checkout__field field">
                                <div className="field__label">ZIP Code</div>
                                <div className="field__wrap">
                                  <input
                                    className="field__input"
                                    type="text"
                                    name="code"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="checkout__btn btn btn_green btn_wide">
                          Place Order
                        </button>
                      </div>
                      <div className="checkout__el js-checkout-el">
                        <button className="checkout__btn btn btn_green btn_wide">
                          Continue with FPX
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout__col">
                <div className="basket basket_checkout">
                  <div className="basket__category">My Cart</div>
                  <div className="basket__list">
                    {cart.map((item) => (
                      <CartItems item={item} key={item._id} />
                    ))}
                  </div>
                  <div className="basket__total">
                    <div className="basket__text">Total:</div>
                    <div className="basket__text">{`RM${price}`}</div>
                  </div>
                  <Link
                    className="basket__button btn btn_border btn_wide"
                    to="/cart"
                  >
                    Edit Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ margin: '50px 50px 70px 50px' }}>Your cart is empty </h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartItems,
});

export default connect(mapStateToProps)(Checkout);
