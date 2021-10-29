import React, {useState} from 'react';
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import '../css/register.css';

function Register() {

  let [information, setInfo] = new useState({    
    email: '',
    password:'',
    username: ''
  });

  function handleSet(key) {
    return ({target: {value}}) => {
      setInfo(previousValue => ({...previousValue, [key]: value}));
    }
  };

  async function register() {

    const response = await fetch('http://localhost:3001/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers' : 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'        
    },
    body: JSON.stringify({
      email: information.email,
      password: information.password,
      username: information.username
    })
  });

  if(response.status !== 200) {
    const errMessage = await response.text();
    throw new Error(`${errMessage}`);
  }

  }

  async function handleSubmit(e) {
    e.preventDefault();

      try {
        await register();
      }catch(err) {
        alert(`${err.message}`);
      }
    



  }

  return (
    <section>
      <Navbar isHidden={sessionStorage.length > 0 ? false : true} cartQuantity={sessionStorage.length}/> 
      <div className='register-container'>
        <h3 className='register'>Create Account</h3>
        <form className='register-form' action='/' method='post'>

          <div>
            <label htmlFor='username'>Username*</label>
            <input type='text' required={true} name='username' id='username' value={information.username} onChange={handleSet('username')}/>
          </div>

          <div>
            <label htmlFor='email'>Email*</label>
            <input type='text'required={true} name='email' id='email' value={information.email} onChange={handleSet('email')} />
          </div>

          <div>
            <label htmlFor='password'>Password*</label>          
            <input type='password' required={true} name='password' id='password' value={information.password} onChange={handleSet('password')} />
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