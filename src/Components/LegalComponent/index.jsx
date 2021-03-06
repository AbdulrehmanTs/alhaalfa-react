import React from "react";
import $ from "jquery";

/**
 * @author
 * @function LegalComponent
 **/

const LegalComponent = (props) => {
  React.useEffect(() => {
    var faq = $(".js-faq"),
      items = faq.find(".js-faq-item");
    items.each(function () {
      var item = $(this);
      let head = item.find(".js-faq-head"),
        body = item.find(".js-faq-body");

      head.on("click", function () {
        item.toggleClass("active");
        body.slideToggle();
      });
    });
  }, []);

  return (
    <>
      <div class="breadcrumbs">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="category.html">
                Categories
              </a>
            </li>
            <li class="breadcrumbs__item">Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div class="faq section js-faq">
        <div class="faq__center center">
          <div class="faq__stage stage">- Legal</div>
          <h2 class="faq__title title title_mb-lg">
            Alha Alfa - <br /> Terms and Conditions
          </h2>
          <div class="faq__container">
            <div class="faq__section">
              <div class="faq__category">1. Introduction</div>
              <div class="faq__list">
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    1.1 Our Terms & Conditions<div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    Here you can put any text that you think would be suitable
                    and relevant to this particular section of the website.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    1.2 Collection of personal data
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    This place is reserved for you to put some text content that
                    you think would make sense here.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    1.3 Purpose of collection of personal data
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    Here you can put any text that you think would be suitable
                    and relevant to this particular section of the website.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    1.4 Usage of your personal data
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    Here you can put any text that you think would be suitable
                    and relevant to this particular section of the website.
                  </div>
                </div>
              </div>
            </div>
            <div class="faq__section">
              <div class="faq__category">2. Payment Terms</div>
              <div class="faq__list">
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    2.1 Different payment methods on our website
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    Just put any text here that would be suitable for this
                    particular section of the website.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    2.2 Our right to cancel your payment
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    Just put any text here that would be suitable for this
                    particular section of the website.
                  </div>
                </div>
              </div>
            </div>
            <div class="faq__section">
              <div class="faq__category">3. Orders</div>
              <div class="faq__list">
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    3.1 Order processing on our website
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    All you need to do is to put your own text here and that is
                    going to be it, all done. This section can be used for
                    really long pieces of text that explain a lot of small
                    details that are required.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    3.2 Dispatch and shipping times for different types of
                    orders<div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    All you need to do is to put your own text here and that is
                    going to be it, all done. This section can be used for
                    really long pieces of text that explain a lot of small
                    details that are required.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    3.3 Return and refund policies for all online orders
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    All you need to do is to put your own text here and that is
                    going to be it, all done. This section can be used for
                    really long pieces of text that explain a lot of small
                    details that are required.
                  </div>
                </div>
              </div>
            </div>
            <div class="faq__section">
              <div class="faq__category">4. Changes</div>
              <div class="faq__list">
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    4.1 Our right to change Terms & Conditions
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    This place is reserved for you to put some text content that
                    you think would make sense here.
                  </div>
                </div>
                <div class="faq__item js-faq-item">
                  <div class="faq__head js-faq-head">
                    4.2 Notice of change in Terms & Conditions
                    <div class="faq__arrow"></div>
                  </div>
                  <div class="faq__body js-faq-body">
                    This place is reserved for you to put some text content that
                    you think would make sense here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalComponent;
