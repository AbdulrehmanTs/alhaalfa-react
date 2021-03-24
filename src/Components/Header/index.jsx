import React from 'react';
import $ from 'jquery';
import { NavLink, Link } from 'react-router-dom';
import Cart from './cart';
import UserInfo from './user-info';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

/**
 * @author
 * @function Header
 **/

const Header = ({ auth: { user }, logout }) => {
  React.useEffect(() => {
    var search = $('.js-search');
    let btn = search.find('.js-search-btn');
    btn.on('click', function () {
      search.toggleClass('show');
    });
  }, []);

  React.useEffect(() => {
    var header = $('.js-header'),
      burger = header.find('.js-header-burger'),
      menu = header.find('.js-menu'),
      items = menu.find('.js-menu-item'),
      close = menu.find('.js-menu-close'),
      back = menu.find('.js-menu-back'),
      html = $('html'),
      body = $('body');
    burger.on('click', function () {
      burger.toggleClass('active');
      menu.toggleClass('visible');
      html.toggleClass('no-scroll');
      body.toggleClass('no-scroll');
    });
    items.each(function () {
      var item = $(this),
        head = item.find('.js-menu-head');

      head.on('click', function () {
        if (!item.hasClass('active')) {
          menu.removeClass('left');
          items.removeClass('active');
          menu.addClass('left');
          item.addClass('active');
        } else {
          items.removeClass('active');
          menu.removeClass('left');
        }
      });
      back.on('click', function () {
        menu.removeClass('left');
        items.removeClass('active');
      });
      close.on('click', function () {
        items.removeClass('active');
        burger.toggleClass('active');
        menu.toggleClass('visible');
        menu.removeClass('left');
        html.removeClass('no-scroll');
        body.removeClass('no-scroll');
      });
    });
  }, []);

  return (
    <header class="header js-header">
      <div class="header__center center">
        <button class="header__burger js-header-burger"></button>
        <NavLink class="header__logo" to="/">
          <img
            class="header__pic header__pic_black-desktop"
            src="./img/cropped-logo-alha-alfa-cosmetics-2020-300x67.png"
            alt=""
          />
          <img class="header__pic header__pic_white-desktop" src="" alt="" />
          <img
            class="header__pic header__pic_black-mobile"
            src="./img/cropped-logo-alha-alfa-cosmetics-2020-300x67.png"
            alt=""
            style={{ width: '200px' }}
          />
          <img
            class="header__pic header__pic_white-mobile"
            src=""
            alt=""
            style={{ width: '200px' }}
          />
        </NavLink>
        <div class="header__control">
          <div class="header__item header__item_hidden">
            <div class="header__search search js-search">
              <div class="search__wrap">
                <input
                  class="search__input"
                  type="text"
                  placeholder="Find something here"
                />
              </div>
              <button class="search__btn js-search-btn">
                <svg class="icon icon-search">
                  <use xlinkHref="img/sprite.svg#icon-search"></use>
                </svg>
              </button>
            </div>
          </div>
          <div class="header__item">
            <Link class="header__link header__link_cart active" to="/cart">
              <svg class="icon icon-cart">
                <use xlinkHref="img/sprite.svg#icon-cart"></use>
              </svg>
            </Link>

            <div class="header__body">
              <Cart />
            </div>
          </div>
          <div class="header__item header__item_hidden">
            <a class="header__link" href="">
              <svg class="icon icon-user">
                <use xlinkHref="img/sprite.svg#icon-user"></use>
              </svg>
            </a>

            <div class="header__body">
              <UserInfo user={user} logout={logout} />
            </div>
          </div>
        </div>
      </div>
      <div class="header__menu menu js-menu">
        <div class="menu__center center">
          <form class="menu__search search">
            <div class="search__wrap">
              <input class="search__input" type="text" placeholder="Search" />
            </div>
            <button class="search__btn">
              <svg class="icon icon-search">
                <use xlinkHref="img/sprite.svg#icon-search"></use>
              </svg>
            </button>
          </form>
          <div class="menu__container">
            <div class="menu__list js-menu-list">
              {user && (
                <Link
                  class="menu__item js-menu-close"
                  to="/me"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <img src="img/product-1.png" alt="" className="user-img" />
                  <p style={{ marginLeft: '10px' }}>
                    {user && user.first_name} {user && user.last_name}
                  </p>
                </Link>
              )}

              <Link class="menu__item active js-menu-close" to="/">
                Home
              </Link>
              <Link class="menu__item js-menu-close" to="/category">
                Promotion
              </Link>
              <Link class="menu__item js-menu-close" to="/category">
                Makeup Set
              </Link>
              <Link class="menu__item js-menu-close" to="/category">
                Shop
              </Link>
              <Link class="menu__item js-menu-close" to="/category">
                Tutorial
              </Link>
              <Link class="menu__item js-menu-close" to="/category">
                Outlets
              </Link>

              <div class="menu__item js-menu-item">
                <div class="menu__head js-menu-head">
                  Stockist
                  <svg class="icon icon-arrow-next">
                    <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                  </svg>
                </div>

                <div class="menu__body js-menu-body">
                  <button class="menu__close js-menu-close">
                    <svg class="icon icon-close">
                      <use xlinkHref="img/sprite.svg#icon-close"></use>
                    </svg>
                  </button>

                  <button class="menu__back js-menu-back">
                    <svg class="icon icon-arrow-prev">
                      <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                    </svg>
                  </button>
                  <div class="menu__group">
                    <a class="menu__link" href="category.php">
                      Malaysia
                    </a>
                    <a class="menu__link" href="category.php">
                      Singapore
                    </a>
                    <a class="menu__link" href="category.php">
                      Indonesia
                    </a>
                  </div>
                </div>
              </div>
              <label class="switch js-switch-bg">
                <input class="switch__input" type="checkbox" />
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
              {user ? (
                <div class="login__row" style={{ marginTop: '8px' }}>
                  <div class="login__col">
                    <button
                      class="login__btn btn btn_green btn_wide js-menu-close"
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div class="login__row no-user">
                  <div class="login__col">
                    <Link to="/register">
                      <button class="login__btn btn btn_green btn_wide js-menu-close">
                        Create Account
                      </button>
                    </Link>
                  </div>
                  <p>OR</p>
                  <div class="login__col">
                    <Link
                      class="login__btn btn btn_border btn_wide js-menu-close"
                      to="/login"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
