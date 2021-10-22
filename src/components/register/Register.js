import React from "react";
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import '../css/register.css';

function Register() {
  return (
    <section>
      <Navbar isHidden={sessionStorage.length > 0 ? false : true} cartQuantity={sessionStorage.length}/> 
      <div className="register-container">
        <h3 className='register'>Create Account</h3>
        <form className='register-form' action='/' method='post'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>          
            <input type='password' name='password' id='password' />
          </div>

          <button type='submit' id='register-submit'>Create Account</button>
          <h6>Existing user?</h6>

          <Link to='/login'>
            <h6>login</h6>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Register;