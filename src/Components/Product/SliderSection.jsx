import React from 'react';
import Slider from 'react-slick';
import RelatedProducts from './RelatedProducts';

const SliderSection = ({ products }) => {
  let prevArrow = (
      <button type="button" class="slick-prev" style={{ marginTop: '30px' }}>
        <svg class="icon icon-arrow-prev">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="/img/sprite.svg#icon-arrow-prev"
          ></use>
        </svg>
      </button>
    ),
    nextArrow = (
      <button type="button" class="slick-next" style={{ marginTop: '30px' }}>
        <svg class="icon icon-arrow-next">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="/img/sprite.svg#icon-arrow-next"
          ></use>
        </svg>
      </button>
    );

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    speed: 600,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="slider section">
      <div className="slider__center center">
        <div className="slider__stage stage">- Explore More</div>
        <h2 className="slider__title title title_mb-lg">Related Products</h2>
        <div className="slider__container">
          <Slider {...settings}>
            {products.map((product) => (
              <RelatedProducts product={product} key={product._id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
