import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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

function App() {
  return (
    <Provider store={store}>
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
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
