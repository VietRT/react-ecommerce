import React from 'react';
import App from './App';
import Products from './components/products/Products';
import Product from './components/products/Product';
import Cart from "./components/products/Cart";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />  
        <Route path="/products" component={Products}/>   
        <Route path={`/product/${window.location.pathname.substring(9)}`} component={Product}/>  
        <Route path="/cart" component={Cart}/>  
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
