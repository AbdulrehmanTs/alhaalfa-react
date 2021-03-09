import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addToCart,
  calTotalItems,
  totals,
  adjustQuantity,
} from '../../redux/actions/cartActions';

const ProductDetails = ({
  cart: { cart },
  selectedProduct,
  addToCart,
  calTotalItems,
  totals,
  adjustQuantity,
}) => {
  const [quantity, setQuantity] = React.useState(1);

  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const onMinus = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  React.useEffect(() => {
    if (cart.find((item) => item._id === selectedProduct._id)) {
      adjustQuantity(selectedProduct, quantity);
      calTotalItems();
      totals();
    }
  }, [quantity]);

  return (
    <div className="details section">
      <div className="details__center center">
        <div className="details__row">
          <div className="details__col">
            <div className="details__stage stage" />
            <h1 className="details__title title" />
            <div className="card__col">
              <div className="card__stage stage">- Detail Product</div>
              <h1 className="card__title title">{selectedProduct.name}</h1>
              <div className="card__details">
                <div className="card__category yellow">Loose</div>
                <div className="card__prices">
                  <div className="card__old">RM214.80</div>
                  <div className="card__actual">{`RM${selectedProduct.price}`}</div>
                </div>
              </div>
              <div className="card__code">
                SKU:<span className="card__number">N/A</span>
              </div>
              <div className="card__control">
                <div className="card__counter counter js-counter">
                  <button
                    className="counter__btn counter__btn_minus"
                    type="button"
                    onClick={() => onMinus()}
                  >
                    <svg className="icon icon-arrow-prev">
                      <use xlinkHref="/img/sprite.svg#icon-arrow-prev" />
                    </svg>
                  </button>
                  <input
                    className="counter__input"
                    type="text"
                    disabled
                    min={1}
                    defaultValue={1}
                    value={quantity}
                    size={3}
                  />
                  <button
                    className="counter__btn counter__btn_plus"
                    type="button"
                    onClick={() => {
                      onAdd();
                    }}
                  >
                    <svg className="icon icon-arrow-next">
                      <use xlinkHref="/img/sprite.svg#icon-arrow-next" />
                    </svg>
                  </button>
                </div>
                {cart.find((item) => item._id === selectedProduct._id) ? (
                  <Link class="card__btn btn btn_green" to="/cart">
                    In Cart
                  </Link>
                ) : (
                  <button
                    class="card__btn btn btn_green"
                    onClick={() => {
                      addToCart(selectedProduct, 1);
                      calTotalItems();
                      totals();
                    }}
                  >
                    Add to Cart
                  </button>
                )}
                <button className="card__favorite">
                  <svg className="icon icon-heart-border">
                    <use xlinkHref="/img/sprite.svg#icon-heart-border" />
                  </svg>
                  <svg className="icon icon-heart-fill">
                    <use xlinkHref="/img/sprite.svg#icon-heart-fill" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="details__col">
            <div className="details__item">
              <div className="details__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <path
                    d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z"
                    stroke="#000"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="details__box">
                <div className="details__text">
                  Set Mengandungi
                  <br />
                  <br />
                  Concealer
                  <br />
                  Matte lipstick
                  <br />
                  Royal propolis foundation
                  <br />
                  Loose powder
                  <br />
                  Eyeshadow
                  <br />
                  Glow creator
                  <br />
                  <p style={{ fontSize: '20px' }}>
                    “Disclaimer : Produk-Produk di promosikan mempunyai tarikh
                    luput kurang dari 1 tahun”
                  </p>
                </div>
              </div>
            </div>
          </div>
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
  adjustQuantity,
})(ProductDetails);
