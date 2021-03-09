import React, { Fragment } from 'react';

/**
 * @author
 * @function Search
 **/

const Search = () => {
  return (
    <div className="products products_search section">
      <div className="products__center center">
        <div className="products__stage stage">- Search Results</div>
        <h2 className="products__title title title_mb-md">
          Eye Care Products for <br />
          Tired Eyes
        </h2>
        <div className="products__result">
          <span className="products__counter">6</span> products found
        </div>
        <div className="filters js-filters">
          <div className="filters__sorting">
            <div className="filters__open js-filters-open">Filter By</div>
            <div className="filters__wrap js-filters-wrap">
              <div className="filters__drop drop js-drop">
                <div className="drop__head js-drop-head">Color</div>
                <div className="drop__body js-drop-body">
                  <a className="drop__link js-drop-link" href="#">
                    Red
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    Blue
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    Green
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    Black
                  </a>
                </div>
              </div>
              <div className="filters__drop drop js-drop">
                <div className="drop__head js-drop-head">Category</div>
                <div className="drop__body js-drop-body">
                  <a className="drop__link js-drop-link" href="#">
                    Treatments
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    Moisturizers
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    Featured
                  </a>
                </div>
              </div>
              <div className="filters__drop drop js-drop">
                <div className="drop__head js-drop-head">Price Range</div>
                <div className="drop__body js-drop-body">
                  <a className="drop__link js-drop-link" href="#">
                    $0 - $10
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    $10 - $50
                  </a>
                  <a className="drop__link js-drop-link" href="#">
                    $50 +
                  </a>
                </div>
              </div>
            </div>
            <div className="filters__field field">
              <div className="field__wrap">
                <select className="field__select">
                  <option>Sort By</option>
                  <option>Sort By</option>
                  <option>Sort By</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="products__list">
          <div className="product">
            <div className="product__sale">20% OFF</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-1.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Sun Cream
            </a>
            <div className="product__details">
              <div className="product__category yellow">Sun Care</div>
              <div className="product__price">
                <span className="product__old">$30</span>
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__sale">20% OFF</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-2.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Night Eye Cream
            </a>
            <div className="product__details">
              <div className="product__category blue">EYE CARE</div>
              <div className="product__price">
                <span className="product__old">$30</span>
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-3.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Acne Skin Gel
            </a>
            <div className="product__details">
              <div className="product__category pink">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-4.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Anti Dry Skin
            </a>
            <div className="product__details">
              <div className="product__category green">Moisturizers</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__new">NEW IN</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-5.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Body Protection
            </a>
            <div className="product__details">
              <div className="product__category yellow">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-6.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              All In One Gel
            </a>
            <div className="product__details">
              <div className="product__category blue">FEATURED</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
