import React from 'react';
import Slider from 'react-slick';

/**
 * @author
 * @function Banner
 **/

const Banner = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {[0, 1, 3, 4].map(() => {
        return (
          <div class="main section">
            <div class="main__center center">
              <div class="main__container">
                <div class="main__details">
                  <div class="main__stage stage">- AlhaAlfa Cosmetics</div>
                  <h1 class="main__title title">
                    Royal Propolis Foundation – Fervi
                  </h1>
                  <a class="main__btn btn btn_green" href="#">
                    Shop Now
                  </a>
                </div>
                <div class="main__preview">
                  {/* <!--<img class="main__pic" src="product-1.png" alt="">  // <source src="https://www.alhaalfa.com/wp-content/uploads/2021/01/Teaser-Powder.mp4" type="video/mp4">--> */}
                  <img class="main__pic" src="./img/product-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Banner;
