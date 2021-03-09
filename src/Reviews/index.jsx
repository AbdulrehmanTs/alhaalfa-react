import React from 'react';

import Slider from 'react-slick';

const Reviews = ({ title }) => {
  const reviews = [
    <div className="review__item">
      <div className="review__ava">
        <img className="review__pic" src="/img/review/1.png" alt="" />
      </div>
      <div className="review__author">Zaza Iman</div>
      <div className="review__text">
        Selama zaza pakai ia tak berminyak dan rasa glowing-glowing je. Selain
        sebagai foundation untuk muka..sebenarnya Alha Alfa Royal Propolis
        Foundation ni banyak kelebihan lain tau sebab ia juga mempunyai
        Treatment dari Air Liur Raja Lebah untuk mencantikkan kulit dan
        mengecilkan pori muka.
      </div>
      <div className="review__text">
        <a href="https://www.zazaiman.com/2017/12/review-alha-alfa-royal-propolis.html">
          Blogger
        </a>
      </div>
    </div>,
    <div className="review__item">
      <div className="review__ava">
        <img className="review__pic" src="/img/review/1.png" alt="" />
      </div>
      <div className="review__author">Zaza Iman</div>
      <div className="review__text">
        Selama zaza pakai ia tak berminyak dan rasa glowing-glowing je. Selain
        sebagai foundation untuk muka..sebenarnya Alha Alfa Royal Propolis
        Foundation ni banyak kelebihan lain tau sebab ia juga mempunyai
        Treatment dari Air Liur Raja Lebah untuk mencantikkan kulit dan
        mengecilkan pori muka.
      </div>
      <div className="review__text">
        <a href="https://www.zazaiman.com/2017/12/review-alha-alfa-royal-propolis.html">
          Blogger
        </a>
      </div>
    </div>,
    <div className="review__item">
      <div className="review__ava">
        <img className="review__pic" src="/img/review/1.png" alt="" />
      </div>
      <div className="review__author">Zaza Iman</div>
      <div className="review__text">
        Selama zaza pakai ia tak berminyak dan rasa glowing-glowing je. Selain
        sebagai foundation untuk muka..sebenarnya Alha Alfa Royal Propolis
        Foundation ni banyak kelebihan lain tau sebab ia juga mempunyai
        Treatment dari Air Liur Raja Lebah untuk mencantikkan kulit dan
        mengecilkan pori muka.
      </div>
      <div className="review__text">
        <a href="https://www.zazaiman.com/2017/12/review-alha-alfa-royal-propolis.html">
          Blogger
        </a>
      </div>
    </div>,
  ];

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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow,
    nextArrow,
    dots: true,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="review section">
      <div className="review__center center">
        <div className="review__container">
          <div className="review__box">
            <div className="review__stage stage">{title}</div>
            <h2 className="review__title title">
              What our Customers are Saying
            </h2>
          </div>

          <div className="review__wrap">
            <Slider {...settings}>
              {reviews.map((review) => {
                return review;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
