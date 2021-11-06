import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';

import App from './App';
import Service from './components/service/Service';
import Products from './components/products/Products';
import Error from './components/error/Error';
import Trending from './components/trending/Trending';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/user/Login';
import Register from './components/register/Register';

import Product from './components/products/Product';
import Cart from './components/products/Cart';
import PaymentMade from './components/products/Sucessfull-Payment';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />  
        <Route exact path='/products' component={Error}/>  
        <Route path={`/products/${window.location.pathname.substring(9)}`} component={Products}/>  
        <Route path={`/product/${window.location.pathname.substring(9)}`} component={Product}/>  
        <Route path='/service' component={Service}/>
        <Route path='/trending' component={Trending}/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart}/> 
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/successful-payment' component={PaymentMade}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
