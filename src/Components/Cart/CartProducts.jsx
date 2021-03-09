import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  removeFromCart,
  adjustQuantity,
  calTotalItems,
  totals,
} from '../../redux/actions/cartActions';

const CartProducts = ({
  item,
  adjustQuantity,
  calTotalItems,
  totals,
  removeFromCart,
}) => {
  const [quantity, setQuantity] = React.useState(item.qty);
  const textInput = React.useRef();

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
    adjustQuantity(item, quantity);
    calTotalItems();
    totals();
  }, [quantity]);

  return (
    <div class="cart__item">
      <Link
        class="cart__preview"
        to={{ pathname: `/product/${item._id}`, query: { id: item._id } }}
      >
        <img class="cart__pic" src={item.imagePath[0]} alt="" />
      </Link>
      <div class="cart__details">
        <a class="cart__product" href="#">
          {item.name}
        </a>
        <div class="cart__price">
          <div class="cart__actual">{`RM${item.price}`}</div>
        </div>
        <div class="cart__control">
          <div class="cart__counter counter">
            <button
              class="counter__btn counter__btn_minus"
              type="button"
              onClick={() => onMinus()}
            >
              <svg class="icon icon-arrow-prev">
                <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
              </svg>
            </button>
            <input
              class="counter__input"
              value={quantity}
              ref={textInput}
              readOnly
              min="1"
              type="number"
              size="3"
            />
            <button
              class="counter__btn counter__btn_plus"
              type="button"
              onClick={() => onAdd()}
            >
              <svg class="icon icon-arrow-next">
                <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
              </svg>
            </button>
          </div>
          <button
            class="cart__remove"
            onClick={() => {
              removeFromCart(item._id);
              calTotalItems();
              totals();
            }}
          >
            <svg class="icon icon-close">
              <use xlinkHref="img/sprite.svg#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  adjustQuantity,
  calTotalItems,
  totals,
  removeFromCart,
})(CartProducts);
