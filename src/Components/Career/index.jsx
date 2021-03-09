import React from "react";

/**
 * @author
 * @function Career
 **/

const Career = (props) => {
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
              <a className="breadcrumbs__link" href="#">
                Navigation
              </a>
            </li>
            <li className="breadcrumbs__item">Careers</li>
          </ul>
        </div>
      </div>
      <div className="work section">
        <div className="work__center center">
          <div className="work__stage stage">- Join our Team</div>
          <h2 className="work__title title title_mb-lg">Explore the Careers</h2>
          <div className="work__row">
            <div className="work__col">
              <div className="filters filters_work js-filters">
                <div className="filters__open js-filters-open">Filter By</div>
                <div className="filters__box js-filters-wrap">
                  <div className="filters__form">
                    <div className="filters__title">Filter By</div>
                    <div className="filters__fieldset">
                      <div className="filters__field field">
                        <div className="field__label">Job Title</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="email"
                            name="job"
                          />
                        </div>
                      </div>
                      <div className="filters__field field">
                        <div className="field__label">Location</div>
                        <div className="field__wrap">
                          <select
                            className="field__select wide"
                            name="location"
                          >
                            <option>Select Location</option>
                            <option>USA</option>
                            <option>Canada</option>
                          </select>
                        </div>
                      </div>
                      <div className="filters__field field">
                        <div className="field__label">Department</div>
                        <div className="field__wrap">
                          <select
                            className="field__select wide"
                            name="department"
                          >
                            <option>Sales &amp; Marketing</option>
                            <option>Sort By</option>
                            <option>Sort By</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="filters__btns">
                      <button className="filters__btn btn btn_green btn_wide">
                        Apply Filters
                      </button>
                      <button className="filters__btn btn btn_border btn_wide">
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work__col">
              <div className="work__item">
                <div className="work__post">Sr. Sales Manager</div>
                <div className="work__text">
                  Sales &amp; Marketing - San&nbsp;Francisco, California -
                  $125k+
                </div>
                <button className="work__btn btn btn_green">Apply</button>
              </div>
              <div className="work__item">
                <div className="work__post">Junior Marketing Designer </div>
                <div className="work__text">
                  Sales &amp; Marketing - Los Angeles, California - $55k+
                </div>
                <button className="work__btn btn btn_green">Apply</button>
              </div>
              <div className="work__item">
                <div className="work__post">Digital Marketing Consultant</div>
                <div className="work__text">
                  Sales &amp; Marketing - Remote (US) - $85k+
                </div>
                <button className="work__btn btn btn_green">Apply</button>
              </div>
              <div className="work__item">
                <div className="work__post">Marketing Manager (Sales)</div>
                <div className="work__text">
                  Sales &amp; Marketing - New York City, New York - $75k+
                </div>
                <button className="work__btn btn btn_green">Apply</button>
              </div>
              <div className="work__item">
                <div className="work__post">Sr. Marketing Designer</div>
                <div className="work__text">
                  Sales &amp; Marketing - San&nbsp;Francisco, California -
                  $150k+
                </div>
                <button className="work__btn btn btn_green">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
