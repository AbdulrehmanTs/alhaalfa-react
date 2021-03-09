import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter section">
      <div className="newsletter__center center">
        <div className="newsletter__container">
          <div className="newsletter__stage stage">- Our Newsletter</div>
          <h2 className="newsletter__title title title_mb-md">
            Sign Up to our Newsletter
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
  );
};

export default Newsletter;
