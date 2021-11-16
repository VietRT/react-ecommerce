import React from "react";
import Product from './Product';
import Products from './Products';
import Cart from './Cart';
import PaymentMade from './Sucessfull-Payment';
import Error from '../error/Error';
import {Route} from 'react-router-dom';

const productRouter = [
        <Route exact path='/products' component={Error} key='Internal404error'/>, 
        <Route path={`/products/${window.location.pathname.substring(10)}`} component={Products} key='products'/>,  
        <Route path={`/product/${window.location.pathname.substring(9)}`} component={Product} key='product'/>,
        <Route path='/cart' component={Cart} key='cart'/>,
        <Route path='/successful-payment' component={PaymentMade} key='success-payment'/>  
];

export default productRouter;