import React from "react";

/**
 * @author
 * @function Blog
 **/

const Blog = (props) => {
  return (
    <>
      <div class="blog section">
        <div class="blog__center center">
          <div class="blog__stage stage">- AlhaAlfa Blog</div>
          <h2 class="blog__title title title_mb-lg">Check Out our Blog</h2>
          <div class="blog__list js-slider-blog">
            <a class="blog__item blog__item_w66" href="#">
              <div class="blog__status blog__status_recent">recent</div>
              <div
                class="blog__preview"
                style={{
                  backgroundImage:
                    "url('https://www.alhaalfa.com/wp-content/uploads/2020/12/Free-Postage-YES-Web-1024x341.jpg')",
                }}
              ></div>
              <h3 class="blog__info">
                Morning Skincare Routine: 10 Top Tips for you
              </h3>
              <div class="blog__category yellow">TOP TIPS</div>
            </a>
            <a class="blog__item blog__item_w33" href="#">
              <div
                class="blog__preview"
                style={{
                  backgroundImage:
                    "url('https://www.alhaalfa.com/wp-content/uploads/2020/12/Free-Postage-YES-Web-1024x341.jpg')",
                }}
              ></div>
              <h3 class="blog__info">New Collection is Out</h3>
              <div class="blog__category yellow">TOP TIPS</div>
            </a>
            <a class="blog__item blog__item_w33" href="#">
              <div class="blog__status blog__status_popular">popular</div>
              <div
                class="blog__preview"
                style={{
                  backgroundImage:
                    "url('https://www.alhaalfa.com/wp-content/uploads/2020/12/Free-Postage-YES-Web-1024x341.jpg')",
                }}
              ></div>
              <h3 class="blog__info">Always Stay Fresh</h3>
              <div class="blog__category yellow">TOP TIPS</div>
            </a>
            <a class="blog__item blog__item_w33" href="#">
              <div
                class="blog__preview"
                style={{
                  backgroundImage:
                    "url('https://www.alhaalfa.com/wp-content/uploads/2020/12/Free-Postage-YES-Web-1024x341.jpg')",
                }}
              ></div>
              <h3 class="blog__info">Improve your Skin now</h3>
              <div class="blog__category yellow">TOP TIPS</div>
            </a>
            <a class="blog__item blog__item_w33" href="#">
              <div
                class="blog__preview"
                style={{
                  backgroundImage:
                    "url('https://www.alhaalfa.com/wp-content/uploads/2020/12/Free-Postage-YES-Web-1024x341.jpg')",
                }}
              ></div>
              <h3 class="blog__info">Stay Safe in the Sun</h3>
              <div class="blog__category yellow">TOP TIPS</div>
            </a>
          </div>
          <div class="blog__btns">
            <button class="blog__btn btn btn_green">View All</button>
          </div>
        </div>
      </div>
      <div class="newsletter section newsletter_desktop">
        <div class="newsletter__center center">
          <div class="newsletter__container">
            <div class="newsletter__stage stage">- AlhaAlfa Promotion</div>
            <h2 class="newsletter__title title title_mb-md">
              Get Discount & Promotion
            </h2>
            <form class="newsletter__form">
              <div class="newsletter__field field">
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div class="newsletter__btns">
                <button
                  class="newsletter__btn btn btn_green btn_wide"
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

export default Blog;
