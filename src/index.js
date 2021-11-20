import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';

import App from './App';
import Service from './components/service/Service';

import productRouter from './components/products/products-router';

// import Trending from './components/trending/Trending';
import About from './components/about/About';
// import Contact from './components/contact/Contact';

import userRouter from './components/user/login-router';
import registerRouter from './components/register/register-router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App} key='home'/>  
        {productRouter}
        <Route path='/service' component={Service} key='service'/>
        {/* <Route path='/trending' component={Trending} key='trending'/> */}
        <Route path='/about' component={About} key='about'/>
        {/* <Route path='/contact' component={Contact} key='contact'/> */}
        {userRouter}
        {registerRouter}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
