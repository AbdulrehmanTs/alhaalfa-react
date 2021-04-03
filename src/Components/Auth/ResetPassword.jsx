import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function ChangePassword
 **/

const ResetPassword = () => {
  return (
    <>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Reset Password</div>
            <h2 class="login__title title title_mb-lg">
              Enter your new Password <br />
            </h2>
            <form class="login__form">
              <div class="login__field field">
                <div class="field__label">New Password</div>
                <div class="field__wrap">
                  <input class="field__input" type="password" />
                </div>
              </div>
              <div class="login__field field">
                <div class="field__label">Confirm Password</div>
                <div class="field__wrap">
                  <input class="field__input" type="password" />
                </div>
              </div>
              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide" type="submit">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
