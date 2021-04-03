import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// scroll to top when component changes
import ScrollToTop from './utils/ScrollToTop';

// components
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Category from './Components/Category';
import LegalComponent from './Components/LegalComponent';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Career from './Components/Career';
import ContactUs from './Components/ContactUs';
import Checkout from './Components/Checkout';
import Product from './Components/Product';
import Search from './Components/Search';
import UserInfo from './Components/UserInfo';
import OrderHistory from './Components/OrderHistory/index';
import ChangePassword from './Components/Auth/ChangePassword';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ResetPassword from './Components/Auth/ResetPassword';

// private route & auth token
import PrivateRoute from './Routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';

// load user
import { loadUser } from './redux/actions/authActions';
import { connect } from 'react-redux';

function App({ auth: { isAuthenticated, loading }, loadUser }) {  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  React.useEffect(() => {
    if (localStorage.token) {
      loadUser(localStorage.token);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <div class="page">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/legal" component={LegalComponent} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute exact path="/me" component={UserInfo} />
            <PrivateRoute
              exact
              path="/update-password"
              component={ChangePassword}
            />
            <PrivateRoute
              exact
              path="/reset-password"
              component={ResetPassword}
            />
            <PrivateRoute
              exact
              path="/order-history"
              component={OrderHistory}
            />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(App);
