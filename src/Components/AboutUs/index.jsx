import React from 'react';

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  return (
    <>
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
                <a className="breadcrumbs__link" href="#">
                  Navigation
                </a>
              </li>
              <li className="breadcrumbs__item">About</li>
            </ul>
          </div>
        </div>
        <div className="company section js-faq">
          <div className="company__wrap section">
            <div className="company__center center">
              <div className="company__stage stage">- Learn More</div>
              <h2 className="company__title title title_mb-lg">
                About Alha Alfa Cosmetics
              </h2>
              <div
                className="company__bg"
                style={{
                  backgroundImage:
                    'url("https://singapore.alhaalfa.com/wp-content/uploads/2018/10/fdbaru-1024x702.jpg")',
                }}
              />
            </div>
          </div>
          <div className="company__container section">
            <div className="company__center center">
              <div className="company__row">
                <div className="company__col">
                  <div className="company__stage stage">
                    - Alha Alfa Cosmetics
                  </div>
                  <h2 className="company__title title">
                    How and When it has All Started
                  </h2>
                  <div
                    className="company__photo"
                    style={{
                      backgroundImage:
                        'url("https://assets.bharian.com.my/images/articles/ALHA_ALFA2_1535535114.jpg")',
                    }}
                  />
                </div>
                <div className="company__col">
                  <div className="company__item">
                    <div className="company__category">When We Founded?</div>
                    <div className="company__text">
                      Founded in 2016, ALHA ALFA RICH LEGACY SDN BHD soon began
                      its path to leadership, creating &amp; producing natural
                      cosmetics at world-class standards.
                    </div>
                  </div>
                  <div className="company__item">
                    <div className="company__category">Where We Located?</div>
                    <div className="company__text">
                      ALHA ALFA RICH LEGACY SDN BHD is located in Bandar Putra
                      Kajang, Selangor Darul Ehsan and ALHA ALFA RICH LEGACY SDN
                      BHD are now considered the leaders of the organic cosmetic
                      industry known as ALHA ALFA COSMETICS.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about section">
            <div className="about__center center">
              <div className="company__text" style={{ fontSize: '20px' }}>
                While based on ancient recipes, our research and development
                team and labs are constantly focused on the future. This allows
                us to stay ahead of the latest developments. Our R&amp;D team of
                chemists and pharmacists are constantly improving maximum
                natural formulations, cold extracting and mixing processes, for
                the best input possible into our products and cosmetics
                applications.
                <br />
                We aim to offer the most beneficial solutions that fit all of
                your needs, thus, Improved products and innovative applications
                quickly find their way to you.
              </div>
            </div>
            <br /> <br />
            <div className="about section">
              <div className="about__center center">
                <div className="about__stage stage">- AlhaAlfa Values</div>
                <h2 className="about__title title title_mb-lg">
                  Our Mission &amp; Vision
                </h2>
                <div className="about__list">
                  <div className="about__item">
                    <div className="about__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="none"
                        stroke="#000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M30 9L17.91 20.875l-6.364-6.25L2 24" />
                        <path d="M22 9h8v8" />
                      </svg>
                    </div>
                    <div className="about__category">Great Innovation</div>
                    <div className="about__text">
                      Suitable for all members of the family with a wide range
                      of cosmetics products.
                    </div>
                  </div>
                  <div className="about__item">
                    <div className="about__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="none"
                      >
                        <path
                          d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z"
                          stroke="#000"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="about__category">High Quality</div>
                    <div className="about__text">
                      Premium natural quality components developed by modern
                      cosmetic technology.
                    </div>
                  </div>
                  <div className="about__item">
                    <div className="about__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="none"
                        stroke="#000"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      >
                        <path
                          d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3"
                          strokeLinecap="round"
                        />
                        <path d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z" />
                      </svg>
                    </div>
                    <div className="about__category">Natural and Organic</div>
                    <div className="about__text">
                      Produce only natural cosmetics, irrespective of their type
                      and purpose.
                    </div>
                  </div>
                </div>
                <div className="about__btns">
                  <a
                    className="about__btn btn btn_green"
                    href="careers-page.html"
                  >
                    View Jobs
                  </a>
                </div>
              </div>
            </div>
            <div className="newsletter section newsletter_desktop">
              <div className="newsletter__center center">
                <div className="newsletter__container">
                  <div className="newsletter__stage stage">
                    - AlhaAlfa Promotion
                  </div>
                  <h2 className="newsletter__title title title_mb-md">
                    Get Discount &amp; Promotion
                  </h2>
                  <form className="newsletter__form">
                    <div className="newsletter__field field">
                      <div className="field__wrap">
                        <input
                          className="field__input"
                          type="text"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="newsletter__btns">
                      <button
                        className="newsletter__btn btn btn_green btn_wide"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
