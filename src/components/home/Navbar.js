import '../css/navbar.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


function Navigation(props) {

  console.warn = () => {};
  
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
            <NavDropdown className='navigation-dropdown' title='Products' id='basic-nav-dropdown'> 
            {props.items.map((item) => {
              return <NavDropdown.Item as={Link} to={`/products/${item.menuItem.substring(0).toLowerCase()}`} className='dropdown-list-item' key={item.id} onClick={props.handleDropdownSelect}>
                  {item.menuItem}                  
              </NavDropdown.Item>
            })}
            </NavDropdown>
            {/* <Nav.Link as={Link} to='/trending' className='navigation-list-item'>
              Trending Packs
            </Nav.Link> */}
            <Nav.Link as={Link} to='/about' className='navigation-list-item'>
              About Me
            </Nav.Link>
            {/* <Nav.Link as={Link} to='/contact' className='navigation-list-item'>
              Contact Me
            </Nav.Link> */}
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/cart'>                
              {/* <Link to='/cart' className='shopping-cart'> */}
              <i className='fa shopping-cart'>&#xf07a;</i>
              <span className='badge badge-warning' id='itemNotification' hidden={props.displayed}> {props.cartAmount} </span>
            {/* </Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to='/login' className='login-btn'>
              Log In
            </Nav.Link>
          </Nav>           
        </Navbar.Collapse>
      </Navbar>
    </header> 
  );
}

export default Navigation;