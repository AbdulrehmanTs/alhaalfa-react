import React from 'react';
import $ from 'jquery';
import Newsletter from '../Newsletter';

/**
 * @author
 * @function FAQ
 **/

const FAQ = (props) => {
  React.useEffect(() => {
    var faq = $('.js-faq'),
      items = faq.find('.js-faq-item');
    items.each(function () {
      var item = $(this),
        head = item.find('.js-faq-head'),
        body = item.find('.js-faq-body');

      head.on('click', function () {
        item.toggleClass('active');
        body.slideToggle();
      });
    });
  }, []);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="category.html">
                Categories
              </a>
            </li>
            <li className="breadcrumbs__item">FAQ Page</li>
          </ul>
        </div>
      </div>
      <div className="faq section js-faq">
        <div className="faq__center center">
          <div className="faq__stage stage">- Find the Answers</div>
          <h2 className="faq__title title title_mb-lg">
            Frequently Asked <br />
            Questions
          </h2>
          <div className="filters js-filters">
            <div className="filters__sorting">
              <div className="filters__open js-filters-open">Filter By</div>
              <div className="filters__wrap js-filters-wrap">
                <div className="filters__field field">
                  <div className="field__wrap">
                    <select className="field__select">
                      <option>Topic</option>
                      <option>Sort By</option>
                      <option>Sort By</option>
                    </select>
                  </div>
                </div>
                <div className="filters__field field">
                  <div className="field__wrap">
                    <select className="field__select">
                      <option>Category</option>
                      <option>Sort By</option>
                      <option>Sort By</option>
                    </select>
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
          <div className="faq__container">
            <div className="faq__section">
              <div className="faq__category">General</div>
              <div className="faq__list">
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    1. How do I place an order on your website?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    All you need to do to place an order on our wesbite is to
                    choose the product that you would like to buy, then add it
                    to cart and pay for it using any of the supported payment
                    methods.{' '}
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    2. What is your return policy?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    All you need to do to place an order on our wesbite is to
                    choose the product that you would like to buy, then add it
                    to cart and pay for it using any of the supported payment
                    methods.{' '}
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    3. Do you offer an option to send a product as a gift?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    All you need to do to place an order on our wesbite is to
                    choose the product that you would like to buy, then add it
                    to cart and pay for it using any of the supported payment
                    methods.{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="faq__section">
              <div className="faq__category">Checkout</div>
              <div className="faq__list">
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    1. What payment methods do you accept?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    All you need to do to place an order on our wesbite is to
                    choose the product that you would like to buy, then add it
                    to cart and pay for it using any of the supported payment
                    methods.{' '}
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    2. Do you offer an option to pay for the product over time?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq__section">
              <div className="faq__category">Shipping</div>
              <div className="faq__list">
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    1. Do I have to pay for the shipping?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    2. How long does it take for you to dispatch my order?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    3. What shipping company do you use?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    4. How long does it usually take for my order to arrive?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq__section">
              <div className="faq__category">Discounts</div>
              <div className="faq__list">
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    1. Do you offer any discounts on your website?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
              </div>
            </div>
            <div className="faq__section">
              <div className="faq__category">Other</div>
              <div className="faq__list">
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    1. Where can I find the reviews?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Please visit our{' '}
                    <a className="faq__link" href="#">
                      reviews page
                    </a>{' '}
                    to find out more about that.
                  </div>
                </div>
                <div className="faq__item js-faq-item">
                  <div className="faq__head js-faq-head">
                    2. How do I contact you?
                    <div className="faq__arrow" />
                  </div>
                  <div className="faq__body js-faq-body">
                    Yes, we do. We have partnered with a few companies that
                    offer such option.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default FAQ;
