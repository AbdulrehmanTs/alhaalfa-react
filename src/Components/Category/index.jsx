import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductItem from './productItem';
import $ from 'jquery';

/**
 * @author
 * @function Category
 **/

const Category = ({ product: { products }, location: { category } }) => {
  React.useEffect(() => {
    var drops = $('.js-drop'),
      link = drops.find('.js-drop-link');
    drops.each(function () {
      var drop = $(this),
        head = drop.find('.js-drop-head'),
        body = drop.find('.js-drop-body');
      head.on('click', function (e) {
        e.stopPropagation();
        if (!drop.hasClass('open')) {
          drops.removeClass('open');
          drop.addClass('open');
        } else {
          drops.removeClass('open');
        }
      });

      body.on('click', function (e) {
        e.stopPropagation();
      });

      $(document).on('click', function () {
        drops.removeClass('open');
      });
    });

    link.on('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this).toggleClass('active');
    });

    var filters = $('.js-filters'),
      open = filters.find('.js-filters-open'),
      wrap = filters.find('.js-filters-wrap');
    open.on('click', function () {
      open.toggleClass('active');
      wrap.slideToggle();
    });

    window.$('select').niceSelect();
  }, []);

  const [value, setValue] = React.useState('latest');

  const onChange = (e) => {
    let sortBy = { ...value };
    sortBy = e.target.value;
    setValue(sortBy);
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Home Page
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" to="#">
                Navigation
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" to="#">
                {category}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="products products_full section">
        <div className="products__center center">
          <div className="products__stage stage">{`- ${category} products`}</div>
          <h2 className="products__title title title_mb-lg">
            {`Explore the ${category} 
            Products`}
          </h2>
          <div className="filters js-filters">
            <div className="filters__sorting">
              <div className="filters__open js-filters-open">Filter By</div>
              <div className="filters__wrap js-filters-wrap">
                <div className="filters__drop drop js-drop">
                  <div className="drop__head js-drop-head">Item</div>
                  <div className="drop__body js-drop-body">
                    <a className="drop__link js-drop-link" to="#">
                      Pack
                    </a>
                    <a className="drop__link js-drop-link" to="#">
                      Loose
                    </a>
                  </div>
                </div>
                <div className="filters__drop drop js-drop">
                  <div className="drop__head js-drop-head">Price Range</div>
                  <div className="drop__body js-drop-body">
                    <a className="drop__link js-drop-link" to="#">
                      $0 - $10
                    </a>
                    <a className="drop__link js-drop-link" to="#">
                      $10 - $50
                    </a>
                    <a className="drop__link js-drop-link" to="#">
                      $50 +
                    </a>
                  </div>
                </div>
              </div>
              <div className="filters__field field">
                <div className="field__wrap">
                  <select
                    className="field__select"
                    onChange={onChange}
                    value={value}
                  >
                    <option value="price">Sort By Price</option>
                    <option value="latest">Sort By Latest</option>
                    <option value="old">Sort By Old</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filters__tags">
              <div className="filters__tag">
                $0 - $10<button className="filters__remove"></button>
              </div>
              <div className="filters__tag">
                Pack<button className="filters__remove"></button>
              </div>
              <div className="filters__tag">
                Loose<button className="filters__remove"></button>
              </div>
            </div>
          </div>
          <div className="products__list">
            {value === 'price'
              ? [...products]
                  .sort((a, b) => a.price - b.price)
                  .map((product) => (
                    <ProductItem product={product} key={product._id} />
                  ))
              : value === 'latest' &&
                products.map((product) => (
                  <ProductItem product={product} key={product._id} />
                ))}
          </div>
        </div>
      </div>
      <div className="newsletter section newsletter_desktop">
        <div className="newsletter__center center">
          <div className="newsletter__container">
            <div className="newsletter__stage stage">- AlhaAlfa Promotion</div>
            <h2 className="newsletter__title title title_mb-md">
              Get Discount & Promotion
            </h2>
            <form className="newsletter__form">
              <div className="newsletter__field field">
                <div className="field__wrap">
                  <input
                    className="field__input"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="newsletter__btns">
                <button
                  className="newsletter__btn btn btn_green btn_wide"
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
  product: state.product,
});

export default connect(mapStateToProps)(Category);
