import '../css/navbar.css';
import {Link} from 'react-router-dom';
import Dropdown from './Navbar-Drop';
import dropdata from '../data_models/Drop_Data';

function Navbar(props) {

  console.warn = () => {};

  return (
    <header className='navbar-header'>
      <div className='navbar-container'>
        <ul>       
          <li className='navbar-item'><Link to='/'>About</Link></li>
          <li className='navbar-item'><Link to='/service'>Service</Link></li>
          <li className='navbar-item'>                                                            
            <Dropdown title='Products' items={dropdata} name='navbar-dropdown' handleSelect={props.handleDropdownSelect}/>         
          </li>
          <li className='navbar-item'><Link to='/trending'>Trending Packs </Link></li>
          <li className='navbar-item'><Link to='/about'>About Me</Link></li>
          <li className='navbar-item'><Link to='/contact'>Contact Me</Link></li>
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