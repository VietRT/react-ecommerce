import '../css/navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props) {

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
          <div className="navbar-right">
            <Link to="/cart" className="shopping-cart">
              <i className="fa">&#xf07a;</i>
              <span className="badge badge-warning" id="lblCartCount" hidden={props.isHidden}> {props.cartQuantity} </span>
            </Link>
            <a className="navbar-log-in" href="http://ryanstech.xyz">Log In</a>
          </div>                                            
        </ul>   
      </div>
    </header>
  );
}

export default Navbar;