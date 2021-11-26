import React, {useState, useContext, useRef} from "react";
import '../css/login.css';
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import dropData from '../data_models/Dropdown_Data';
import {userContext} from '../context/userContext';

function Login() {

  // const [credentials, setCredentials] = new useState({
  //   email: '',
  //   password: ''
  // });

  const loginemail = new useRef(null);
  const loginpassword = new useRef(null);

  const [validator, setValidator] = new useState('');

  const {auth, setAuthentication} = useContext(userContext);

  // function handleCredentials(key)  {
  //     return (({target: {value}}) => {
  //       setCredentials(previous => ({...previous, [key]: value}));
  //     });
  // }

  function resetLoginInputs() {
    loginemail.current.value = '';
    loginpassword.current.value = '';
  }

  async function getValidation() {

    //'http://localhost:3001/login/user/auth' || 'https://ecomm-be-server.herokuapp.com/login/user/auth'
    const response = await fetch('https://ecomm-be-server.herokuapp.com/login/user/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers' : 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      body: JSON.stringify({
        email: loginemail.current.value,
        password: loginpassword.current.value
      })
    });
    
    if(response.status !== 200) {
      const err = await response.text();
      setValidator(err);
    }else {
      const username = await response.text();
      console.log('token registered for login session');
      setAuthentication(previous => ({...previous, user: username, authenticated: true}));
      setValidator('');
      sessionStorage.setItem('user', username);
      sessionStorage.setItem('authenticated', true);
    }
  }

  function handleValidation(e) {
    e.preventDefault();

    // setCredentials({
    //   email: '',
    //   password: ''
    // });

    try {
      getValidation();
      resetLoginInputs();
    }catch (err) {
      console.log(err.message);
    }
  }

  return (
    <section>
      <Navbar items={dropData} />
      <div className="login-container">
        <h3 className='login'>Login</h3>
        <h5 id='login-error'>{validator}</h5>
        <form className='login-form' action='/' method='POST'> 
          <div>
            <label htmlFor='email'>Email</label>
            {/* onChange={handleCredentials('email')} */}
            <input required={true} type='text' name='email' id='email' autoComplete="off" ref={loginemail}/>
          </div>

          <div>
            <label htmlFor='password'>Password</label>          
            {/* onChange={handleCredentials('password')} */}
            <input required={true} type='password' name='password' id='password' autoComplete="off" ref={loginpassword}/>
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