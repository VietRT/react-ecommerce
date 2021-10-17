import React from "react";
import './css/navbar.css';
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <ul >       
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">About Service</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/trending">Trending Packs</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <div className="contact-me">
            <a href="http://ryanstech.xyz" className="shopping-cart"><FaShoppingCart /></a>           
            <a href="http://ryanstech.xyz">Log In</a>
          </div>                                            
        </ul>   
      </div>
    </header>
  );
}

export default Navbar;