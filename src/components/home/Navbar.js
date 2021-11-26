import React, {useContext} from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';
import {userContext} from '../context/userContext';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {cartContext} from '../context/cartContext';

function Navigation(props) {

  console.warn = () => {};

  const {auth} = useContext(userContext);

  const {currentCart} = useContext(cartContext);

  function handleSignout() {
    sessionStorage.setItem('user', '');
    sessionStorage.setItem('authenticated', false);
    //'http://localhost:3000/login' || 'https://ryanstech.xyz/login'
    window.location.assign('https://ryanstech.xyz/login');
  }

  return (
      <header className='navbar-header'>
        <Navbar bg='light' expand='lg' className='bg-color'>
          <Navbar.Brand className='brand' id='navigation-brand'>
            <Nav.Link as={Link} to='/'>
              <p id='brand-logo'>EWA<span id='full-brand-name'> | Ecommerce Web Application</span></p>
            </Nav.Link>
          </Navbar.Brand>         
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link as={Link} to='/' className='navigation-list-item'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/service' className='navigation-list-item'>
                Service
              </Nav.Link>             
              <NavDropdown className='basic-navigation-dropdown' title='Products' id='basic-nav-dropdown'> 
              {props.items.map((item) => {
                return <NavDropdown.Item as={Link} to={`/products/${item.menuItem.substring(0).toLowerCase()}`} className='dropdown-list-item' key={item.id} onClick={props.handleDropdownSelect}>
                    {item.menuItem}                  
                </NavDropdown.Item>
              })}
              </NavDropdown>
              <Nav.Link as={Link} to='/about' className='navigation-list-item'>
                About Me
              </Nav.Link>
            </Nav>       
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>                
                <i className='fa shopping-cart'>&#xf07a;</i>
                <span className='badge badge-warning' id='itemNotification' hidden={currentCart.length > 0 ? false : true}>
                  {currentCart.length}
                </span>
              </Nav.Link>
                <Nav.Link as={Link} to='/login' id='login-btn' hidden={typeof auth.authenticated === 'string' ? (auth.authenticated === 'true') : auth.authenticated}>
                  Log in
                </Nav.Link>
                {/* to='/user/member' */}
                <NavDropdown className='member-navigation-dropdown' title={auth.user.substring(0,1).toUpperCase() + auth.user.substring(1)}  id='member-nav-dropdown' 
                hidden={typeof auth.authenticated === 'string' ? !(auth.authenticated === 'true') : !auth.authenticated}>
                  <NavDropdown.Item id='signout' onClick={handleSignout}>
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>           
          </Navbar.Collapse>
        </Navbar>
      </header> 
  );
}

export default Navigation;