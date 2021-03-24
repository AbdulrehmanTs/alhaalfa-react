import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

/**
 * @author
 * @function Login
 **/

const Login = ({ auth: { isAuthenticated }, login }) => {
  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log('Please enter all fields');
    } else {
      login({
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
            <li class="breadcrumbs__item">Login</li>
          </ul>
        </div>
      </div>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Login</div>
            <h2 class="login__title title title_mb-lg">
              Login to Your <br />
              Account
            </h2>
            <form class="login__form" onSubmit={onSubmit}>
              <div class="login__field field">
                <div class="field__label">Email Address</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div class="login__field field">
                <div class="field__label">Password</div>
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
              <label class="login__checkbox checkbox">
                <input
                  class="checkbox__input js-checkout-checkbox"
                  type="checkbox"
                  checked
                />
                <span class="checkbox__in">
                  <span class="checkbox__tick"></span>
                  <span class="checkbox__text">Remember me</span>
                </span>
              </label>
              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide" type="submit">
                  Login
                </button>
              </div>
              <div class="login__row">
                <div class="login__col">
                  <Link
                    class="login__btn btn btn_border btn_wide"
                    to="/register"
                  >
                    Create Account{' '}
                  </Link>
                </div>
                <div class="login__col">
                  <a class="login__link" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Login);
