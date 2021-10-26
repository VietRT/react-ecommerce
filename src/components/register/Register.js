import React, {useRef} from 'react';
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import '../css/register.css';

function Register() {

  let email = new useRef(null);
  let password = new useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3001/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'        
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value
      })
    });
  }

  return (
    <section>
      <Navbar isHidden={sessionStorage.length > 0 ? false : true} cartQuantity={sessionStorage.length}/> 
      <div className='register-container'>
        <h3 className='register'>Create Account</h3>
        <form className='register-form' action='http://localhost:3001/api/user' method='post'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' ref={email} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>          
            <input type='password' name='password' id='password' ref={password}/>
          </div>

          <button type='submit' id='register-submit' onClick={handleSubmit}>Create Account</button>
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