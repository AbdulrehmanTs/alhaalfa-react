import React from 'react';
import { connect } from 'react-redux';
import AlertMessage from '../../utils/AlertMessage';

/**
 * @author
 * @function ChangePassword
 **/

const ForgotPassword = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [email, setEmail] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setOpen(true);
      setSeverity('error');
      setMessage('Please enter your Email');
    } else {
      setOpen(true);
      setSeverity('success');
      setMessage('Password reset link sent to your Email');
      setEmail('');
    }
  };

  return (
    <>
      <div class="login section">
        <div class="login__details">
          <div class="login__center center">
            <div class="login__stage stage">- Forgot Password</div>
            <h2 class="login__title title title_mb-lg">
              Enter your <br />
              Email Address
            </h2>
            <form class="login__form" onSubmit={onSubmit}>
              <div class="login__field field">
                <div class="field__label">Email Address</div>
                <div class="field__wrap">
                  <input
                    class="field__input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="login__btns">
                <button class="login__btn btn btn_green btn_wide" type="submit">
                  Confirm
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

export default connect()(ForgotPassword);
