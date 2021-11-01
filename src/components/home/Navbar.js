import '../css/navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props) {

  return (
    <header className='navbar-header'>
      <div className='navbar-container'>
        <ul >       
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/service'>About Service</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/trending'>Trending Packs</Link></li>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contact'>Contact Me</Link></li>
          <div className='navbar-right'>
            <Link to='/cart' className='shopping-cart'>
              <i className='fa'>&#xf07a;</i>
              {/* pages using cartAmount & displayed: about/contact/home/products/register/service/trending/user */}
              <span className='badge badge-warning' id='itemNotification' hidden={props.displayed}> {props.cartAmount} </span>
            </Link>
            <Link to='/login' className='login-btn'>Log In</Link>
          </div>                                            
        </ul>   
      </div>
    </header>
  );
}

export default Navbar;