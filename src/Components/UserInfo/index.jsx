import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  updateInfo,
  clearErrors,
  clearResponseMessage,
} from '../../redux/actions/authActions';
import AlertMessage from '../../utils/AlertMessage';

const UserInfo = ({
  auth: { user, error, responseMessage },
  updateInfo,
  clearErrors,
  clearResponseMessage,
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

  const [profile, setProfile] = React.useState({
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    website: user.website,
    address_shipping: user.address_shipping,
    address_billing: user.address_billing,
  });

  const {
    username,
    first_name,
    last_name,
    email,
    phone_number,
    website,
    address_shipping,
    address_billing,
  } = profile;

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (error) {
      return;
    } else {
      updateInfo(profile);
    }
  };

  React.useEffect(() => {
    if (error) {
      setOpen(true);
      setSeverity('error');
      setMessage(error);
      clearErrors();
    }
  }, [error]);

  React.useEffect(() => {
    if (responseMessage) {
      setOpen(true);
      setSeverity('success');
      setMessage(responseMessage);
      clearResponseMessage();
    }
  }, [responseMessage]);

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
            <li class="breadcrumbs__item">My Account</li>
          </ul>
        </div>
      </div>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Your Information</div>
            <h2 class="login__title title title_mb-lg">
              Add or Update your <br />
              Information
            </h2>
            <form class="login__form" onSubmit={onSubmit}>
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
              <div style={{ display: 'flex' }}>
                <div
                  class="login__field field"
                  style={{ marginRight: '10px', width: '50%' }}
                >
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

                <div class="login__field field" style={{ width: '50%' }}>
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
                <div class="field__label">Phone Number</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    name="phone_number"
                    value={phone_number}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div class="login__field field">
                <div class="field__label">Website</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    name="website"
                    value={website}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div class="login__field field">
                <div class="field__label">Shipping Address</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    name="address_shipping"
                    value={address_shipping}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div class="login__field field">
                <div class="field__label">Billing Address</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="text"
                    name="address_billing"
                    value={address_billing}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div class="login__field field"></div>

              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide" type="submit">
                  Update
                </button>
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

export default connect(mapStateToProps, {
  updateInfo,
  clearErrors,
  clearResponseMessage,
})(UserInfo);
