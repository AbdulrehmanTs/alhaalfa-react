import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @author
 * @function ChangePassword
 **/

const ChangePassword = () => {
  return (
    <>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Update Password</div>
            <h2 class="login__title title title_mb-lg">
              Update your <br />
              Password
            </h2>
            <form class="login__form">
              <div class="login__field field">
                <div class="field__label">Current Password</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="password"
                    name="currentPassword"
                  />
                </div>
              </div>
              <div class="login__field field">
                <div class="field__label">New Password</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="password"
                    name="newPassword"
                  />
                </div>
              </div>
              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
