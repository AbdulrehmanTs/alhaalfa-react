import React from 'react';
import { connect } from 'react-redux';
import Reviews from '../../Reviews';
import Newsletter from '../Newsletter';
import ProductDetails from '../ProductDetails';
import SliderSection from './SliderSection';
import Slider from 'react-slick';
import ProductImages from './ProductImages';
import $ from 'jquery';

/**
 * @author
 * @function Products
 **/

const Products = ({ product: { products }, location }) => {
  const selectedProduct = location.query
    ? products.find((product) => product._id === location.query.id)
    : location.product;

  const [productImage, setProductImage] = React.useState(
    selectedProduct.imagePath[0]
  );

  let prevArrow = (
      <button type="button" class="slick-prev">
        <svg class="icon icon-arrow-prev">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="/img/sprite.svg#icon-arrow-prev"
          ></use>
        </svg>
      </button>
    ),
    nextArrow = (
      <button type="button" class="slick-next">
        <svg class="icon icon-arrow-next">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="/img/sprite.svg#icon-arrow-next"
          ></use>
        </svg>
      </button>
    );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,

    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  React.useEffect(() => {
    window.$('.js-zoom').ezPlus({
      zoomWindowWidth: 504,
      zoomWindowHeight: 504,
      zoomWindowOffsetX: 50,
      borderSize: '5',
      borderColour: '#F6F7FB',
      responsive: true,
      respond: [
        {
          range: '768-1365',
          zoomType: 'inner',
          cursor: 'crosshair',
          borderSize: '0',
        },
        {
          range: '320-767',
          enabled: false,
          showLens: false,
        },
      ],
    });
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('.card__preview').on('click', function (e) {
        e.preventDefault();
      });
    }
    window.$('select').niceSelect();
  }, [productImage]);

  return (
    <>
      <div className="card section">
        <div className="card__center center">
          <div className="card__row">
            <div className="card__col">
              <div className="card__gallery">
                <div className="card__container">
                  <Slider {...settings}>
                    {selectedProduct.imagePath.map((image) => (
                      <ProductImages
                        image={image}
                        productImage={productImage}
                        setProductImage={setProductImage}
                      />
                    ))}
                  </Slider>
                </div>
                <div className="card__wrap">
                  <div className="card__status card__status_sale">20% OFF</div>
                  <div className="card__preview ">
                    <img
                      className="card__pic js-zoom"
                      src={productImage}
                      alt=""
                      data-zoom-image={productImage}
                    />
                  </div>
                  <div className="card__icon">
                    <svg className="icon icon-magnifier">
                      <use xlinkHref="/img/sprite.svg#icon-magnifier" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Multiselect dropdown */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <div className="extra-glow-heading">Set Extra Glow</div>
              <div className="select-heading-style">Foundation & Concealer</div>
              <select className="selectpicker w-100">
                <option>United Kingdom</option>
                <option>United States</option>
                <option>France</option>
                <option>Germany</option>
                <option>Italy</option>
              </select>

              <div className="select-heading-style">
                AlhaAlfa Cushion Blusher
              </div>

              <select className="selectpicker w-100">
                <option>United Kingdom</option>
                <option>United States</option>
                <option>France</option>
                <option>Germany</option>
                <option>Italy</option>
              </select>

              <div className="select-heading-style">
                {' '}
                Waterproof Loose Powder
              </div>

              <select className="selectpicker w-100">
                <option>United Kingdom</option>
                <option>United States</option>
                <option>France</option>
                <option>Germany</option>
                <option>Italy</option>
              </select>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
      <ProductDetails selectedProduct={selectedProduct} />
      <Reviews title="- Product Reviews" />
      <SliderSection products={products} />
      <Newsletter />
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps)(Products);
