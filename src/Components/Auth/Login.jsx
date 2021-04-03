import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  login,
  clearErrors,
  setLoading,
} from '../../redux/actions/authActions';
import AlertMessage from '../../utils/AlertMessage';

/**
 * @author
 * @function Login
 **/

const Login = ({
  auth: { isAuthenticated, error },
  login,
  clearErrors,
  setLoading,
}) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const history = useHistory();

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  React.useEffect(() => {
    if (error) {
      setOpen(true);
      setSeverity('error');
      setMessage(error);
      clearErrors();
    }
  }, [error]);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setOpen(true);
      setSeverity('error');
      setMessage('Please enter your Email and Password');
    } else if (error) {
      return;
    } else {
      setLoading();
      login({
        email,
        password,
      });
    }
  };

  return (
    <>
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
                  <Link class="login__link" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <AlertMessage
        message={message}
        severity={severity}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login, clearErrors, setLoading })(
  Login
);
