import React from 'react';
import { connect } from 'react-redux';
import {
  calTotalItems,
  removeFromCart,
  totals,
} from '../../redux/actions/cartActions';

const CartItems = ({ item, removeFromCart, calTotalItems, totals }) => {
  return (
    <div className="basket__item">
      <div className="basket__preview">
        <img className="basket__pic" src={item.imagePath[0]} alt="" />
      </div>
      <div className="basket__details">
        <div className="basket__product">{item.name}</div>
        <div className="basket__price">
          <div className="basket__old">RM60.00</div>
          <div className="basket__actual">{`RM${item.price} x ${item.qty}`}</div>
        </div>
      </div>
      <button
        className="basket__remove"
        onClick={() => {
          removeFromCart(item._id);
          calTotalItems();
          totals();
        }}
      >
        <svg className="icon icon-close">
          <use xlinkHref="/img/sprite.svg#icon-close" />
        </svg>
      </button>
    </div>
  );
};

export default connect(null, { removeFromCart, calTotalItems, totals })(
  CartItems
);
