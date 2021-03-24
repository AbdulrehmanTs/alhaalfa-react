import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';

/**
 * @author
 * @function Register
 **/

const Register = ({ signUp }) => {
  const [user, setUser] = React.useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const { username, first_name, last_name, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, first_name, last_name, email, password);
    if (!username || !first_name || !last_name || !email || !password) {
      console.log('Please enter all fields');
    } else if (password.length < 6) {
      console.log('Password should be of atleast 6 characters');
    } else {
      signUp({
        username,
        first_name,
        last_name,
        email,
        password,
      });
    }
  };

  return (
    <>
      <div class="breadcrumbs">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <Link class="breadcrumbs__link" to="/">
                Home Page
              </Link>
            </li>
            <li class="breadcrumbs__item">
              <Link class="breadcrumbs__link" to="/category">
                Categories
              </Link>
            </li>
            <li class="breadcrumbs__item">Sign Up</li>
          </ul>
        </div>
      </div>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Sign Up</div>
            <h2 class="login__title title title_mb-lg">Create Account</h2>
            <form class="login__form" onSubmit={onSubmit}>
              <div class="login__wrap">
                <div class="login__status success"></div>

                <div class="login__field field">
                  <div class="field__label">Username</div>
                  <div class="field__wrap">
                    <input
                      class="field__input"
                      type="text"
                      name="username"
                      value={username}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div class="login__field field">
                  <div class="field__label">First Name</div>
                  <div class="field__wrap">
                    <input
                      class="field__input"
                      type="text"
                      name="first_name"
                      value={first_name}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div class="login__field field">
                  <div class="field__label">Last Name</div>
                  <div class="field__wrap">
                    <input
                      class="field__input"
                      type="text"
                      name="last_name"
                      value={last_name}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div class="login__field field">
                  <div class="field__label">Email Address</div>
                  <div class="field__wrap">
                    <input
                      class="field__input"
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div class="login__field field">
                  <div class="field__label">Create Password</div>
                  <div class="field__wrap">
                    <input
                      class="field__input"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <label class="login__checkbox checkbox">
                <input
                  class="checkbox__input js-checkout-checkbox"
                  type="checkbox"
                  checked
                />
                <span class="checkbox__in">
                  <span class="checkbox__tick"></span>
                  <span class="checkbox__text">
                    I have read and agree to{' '}
                    <Link class="checkbox__link" to="/legal">
                      terms & conditions
                    </Link>
                  </span>
                </span>
              </label>
              <div class="login__row">
                <div class="login__col">
                  <button
                    type="submit"
                    class="login__btn btn btn_green btn_wide"
                  >
                    Create Account{' '}
                  </button>
                </div>
                <div class="login__col">
                  <Link class="login__btn btn btn_border btn_wide" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { signUp })(Register);
