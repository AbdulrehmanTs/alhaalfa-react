import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  //   function ToggleDark() {
  //   console.log("===>called<====");
  React.useEffect(() => {
    var switchBody = $('.js-switch-bg');
    let body = $('body');
    switchBody.on('change', function () {
      body.toggleClass('dark');
    });
  }, []);
  //   }

  return (
    <footer class="footer">
      <div class="footer__center center">
        <div class="footer__row">
          <div class="footer__col">
            <a class="footer__logo" href="index">
              <img
                class="footer__pic footer__pic_black-desktop"
                style={{ width: '150px' }}
                src="./img/cropped-logo-alha-alfa-cosmetics-2020-300x67.png"
                alt=""
              />
              <img
                class="footer__pic footer__pic_white-desktop"
                style={{ width: '150px' }}
                src=""
                alt=""
              />
              <img
                class="footer__pic footer__pic_black-mobile"
                style={{ width: '150px' }}
                src="./img/cropped-logo-alha-alfa-cosmetics-2020-300x67.png"
                alt=""
              />
              <img
                class="footer__pic footer__pic_white-mobile"
                style={{ width: '150px' }}
                src=""
                alt=""
              />
            </a>
            <div class="footer__copyright">
              © 2017-2021 - All rights reserved
            </div>
            <div class="footer__social social">
              <a
                class="social__link"
                href="https://www.instagram.com/alhaalfacosmetics_hq/"
                target="_blank"
              >
                <svg class="icon icon-instagram">
                  <use xlinkHref="img/sprite.svg#icon-instagram"></use>
                </svg>
              </a>

              <a
                class="social__link"
                href="https://www.twitter.com/alhaalfaonline"
                target="_blank"
              >
                <svg class="icon icon-twitter">
                  <use xlinkHref="img/sprite.svg#icon-twitter"></use>
                </svg>
              </a>
              <a
                class="social__link"
                href="https://www.facebook.com/alhaalfacosmeticsHQ/"
                target="_blank"
              >
                <svg class="icon icon-facebook">
                  <use xlinkHref="img/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </div>
            <label class="switch js-switch-bg">
              <input
                class="switch__input"
                type="checkbox"
                // onChange={ToggleDark}
              />
              <span class="switch__in">
                <span class="switch__tick">
                  <img
                    class="switch__pic switch__pic_moon"
                    src="img/moon.svg"
                    alt=""
                  />
                  <img
                    class="switch__pic switch__pic_sun"
                    src="img/sun.svg"
                    alt=""
                  />
                </span>
              </span>
            </label>
          </div>
          <div class="footer__col">
            <div class="footer__category">Alha Alfa Cosmetics</div>
            <div class="footer__menu">
              <Link class="footer__link" to="/category">
                Our Outlets
              </Link>
              <Link class="footer__link" to="/category">
                Our Stockist
              </Link>
              <Link class="footer__link" to="/category">
                Makeup Services
              </Link>
              <Link class="footer__link" to="/category">
                Singapore
              </Link>
              <Link class="footer__link" to="/category">
                Brunei
              </Link>

              <Link class="footer__link" to="/category">
                Indonesia
              </Link>
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__category">Legal</div>
            <div class="footer__menu">
              <Link class="footer__link" to="/legal">
                Terms of Service
              </Link>
              <Link class="footer__link" to="/legal">
                Privacy Policy
              </Link>

              <Link class="footer__link" to="/legal">
                Returns Policy
              </Link>

              <Link class="footer__link" to="/legal">
                Shipping
              </Link>

              <Link class="footer__link" to="/legal">
                Data Protection
              </Link>
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__category">Company</div>
            <div class="footer__menu">
              <Link class="footer__link" to="/about">
                About
              </Link>
              <Link class="footer__link" to="/faq">
                Faq
              </Link>
              <Link class="footer__link" to="/contactus">
                Contact
              </Link>
              <Link class="footer__link" to="/career">
                Careers
              </Link>
              <Link class="footer__link" href="#">
                Vision
              </Link>
              <a class="footer__link" href="#">
                Culture
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
