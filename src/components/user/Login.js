import React, { useState } from "react";
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import dropData from '../data_models/Dropdown_Data';
import '../css/login.css';

function Login() {

  const [credentials, setCredentials] = new useState({
    email: '',
    password: ''
  });

  const [validator, setValidator] = new useState('');

  const [approval, setApproval] = new useState({
    approve: false,
    user: ''
  });

  function handleCredentials(key)  {
      return (({target: {value}}) => {
        setCredentials(previous => ({...previous, [key]: value}));
      });
  }

  async function getValidation() {

    const response = await fetch('http://localhost:3001/login/user/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    
    if(response.status !== 200) {
      const err = await response.text();
      setValidator(err);
    }else {
      const username = await response.text();
      console.log('token registered for login session');
      // window.location.assign(`http://localhost:3000/`);
      setApproval(previous => ({...previous, approve: true, user: username}));
    }
  }

  function handleValidation(e) {
    // e.preventDefault();

    try {
      getValidation();
    }catch (err) {
      console.log(err.message);
    }
  }



  return (
    <section>
      <Navbar items={dropData} valid={approval.approve} user={approval.user}/>
      <div className="login-container">
        <h3 className='login'>Login</h3>
        <h5 id='login-error'>{validator}</h5>
        <form className='login-form' action='/' method='POST'>  {/*action='/login/auth*/}
          <div>
            <label htmlFor='email'>Email</label>
            <input required={true} type='text' name='email' id='email' autoComplete="off" onChange={handleCredentials('email')}/>
          </div>

          <div>
            <label htmlFor='password'>Password</label>          
            <input required={true} type='password' name='password' id='password' autoComplete="off"onChange={handleCredentials('password')}/>
          </div>

          <button type='submit' id='login-submit' onClick={handleValidation}>Log in</button>
          <h6>New user?</h6>

          <Link to='/register'>
            <h6>create account</h6>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Login;