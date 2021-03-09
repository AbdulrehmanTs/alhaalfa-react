import React from 'react';
import Slider from 'react-slick';
import CategoriesItem from './categoryItem';

/**
 * @author
 * @function BrowseByCat
 **/

const BrowseByCat = ({ categories, loading }) => {
  let prevArrow = (
      <button type="button" class="slick-prev">
        <svg class="icon icon-arrow-prev">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="img/sprite.svg#icon-arrow-prev"
          ></use>
        </svg>
      </button>
    ),
    nextArrow = (
      <button type="button" class="slick-next">
        <svg class="icon icon-arrow-next">
          <use
            xmlns="http://www.w3.org/1999/xlink"
            xlinkHref="img/sprite.svg#icon-arrow-next"
          ></use>
        </svg>
      </button>
    );

  let settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow,
    nextArrow,
    speed: 600,
    infinite: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div class="categories section">
      <div class="categories__center center">
        <div class="categories__stage stage">- AlhaAlfa Categories</div>
        <h2 class="categories__title title title_mb-lg">Browse by Category</h2>
        <div class="categories__container">
          <Slider {...settings}>
            {categories.map((category) => (
              <CategoriesItem category={category} key={category._id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCat;
