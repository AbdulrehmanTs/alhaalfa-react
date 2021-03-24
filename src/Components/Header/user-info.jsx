import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ user, logout }) => {
  return (
    <div class="basket basket_header">
      <div class="basket__total" style={{ marginBottom: '0px' }}>
        {!user ? (
          <div class="basket__text">
            <p style={{ marginBottom: '10px' }}>
              You are currently not logged in:
            </p>
            <div class="login__row">
              <div class="login__col">
                <Link to="/register">
                  <button class="login__btn btn btn_green btn_wide">
                    Create Account
                  </button>
                </Link>
              </div>
              <p>OR</p>
              <div class="login__col">
                <Link class="login__btn btn btn_border btn_wide" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div class="basket__text">
            <Link to="/me" className="user-info">
              <img src="img/product-1.png" alt="" className="user-img" />
              <p>
                {user && user.first_name} {user && user.last_name}
              </p>
            </Link>

            <Link to="/order-history" className="user-info user-settings">
              <img src="img/history.svg" alt="" className="user-icon" />
              <p>Order History</p>
            </Link>

            <a
              href=""
              className="user-info user-settings"
              onClick={() => {
                logout();
              }}
            >
              <img src="img/exit.svg" alt="" className="user-icon" />
              <p>Logout</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
