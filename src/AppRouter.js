import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';

import App from './App';
import Service from './components/service/Service';

import productRouter from './components/products/products-router';

import About from './components/about/About';

import userRouter from './components/user/login-router';
import registerRouter from './components/register/register-router';

import {userContext} from './components/context/userContext';

import {cartContext} from './components/context/cartContext';

function AppRouter() {

  const [auth, setAuthentication] = new useState({
    user:  '',
    authenticated: false,
    // setAuthenticated: (auth) => {}
  });

  const [currentCart, setCurrentCart] = new useState([]);

  useEffect(() => {
    if(sessionStorage.getItem('user') !== null) {
      setAuthentication(previous => ({...previous, user: sessionStorage.getItem('user'), authenticated: sessionStorage.getItem('authenticated')}));
    }
  }, []);

  return(
    <Router>
      <cartContext.Provider value={{currentCart, setCurrentCart}} >
        <userContext.Provider value={{auth, setAuthentication}}>
          <Switch>
            <Route exact path='/' component={App} key='home'/>  
            {productRouter}
            <Route path='/service' component={Service} key='service'/>
            <Route path='/about' component={About} key='about'/>
            {userRouter}
            {registerRouter}
          </Switch>
        </userContext.Provider>
      </cartContext.Provider>
    </Router>
  );
  
}

export default AppRouter;