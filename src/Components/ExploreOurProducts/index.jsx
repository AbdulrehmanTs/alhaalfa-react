import React from 'react';
import ProductItem from './productItem';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function ExploreOurProducts
 **/

const ExploreOurProducts = ({ products, loading, addToCart }) => {
  return (
    <div class="products products_main section">
      <div class="products__center center">
        <div class="products__stage stage">- Latest Products </div>
        <h2 class="products__title title title_mb-lg">Explore our Products</h2>
        <div class="products__list">
          {/* <div class="product">
            <div class="product__sale">20% OFF</div>
            <div class="product__view">
              <Link class="product__preview" to="/product">
                <img
                  class="product__pic"
                  src="https://www.alhaalfa.com/wp-content/uploads/2021/01/IMGM1344-scaled.jpg"
                  alt=""
                />
              </Link>
              <button class="product__btn btn btn_green">Add to Cart</button>
            </div>

            <div class="product__details">
              <div class="product__category yellow">Loose Item</div>
              <div class="product__price">
                <span class="product__old">RM60.00</span>
                <span class="product__actual">RM24.00</span>
              </div>
            </div>
          </div> */}

          {products.slice(0, 7).map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
        <div class="products__btns">
          <Link
            class="products__btn btn btn_green"
            to={{ pathname: '/category', category: 'All' }}
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurProducts;
