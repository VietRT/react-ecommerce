import React, {useState, useContext, useRef} from "react";
import '../css/login.css';
import Navbar from '../home/Navbar';
import Loader from '../load/Loader';
import {Link} from 'react-router-dom';
import dropData from '../data_models/Dropdown_Data';
import {userContext} from '../context/userContext';

function Login() {

  const loginemail = new useRef(null);
  const loginpassword = new useRef(null);
  const [validator, setValidator] = new useState('');
  const {setAuthentication} = useContext(userContext);
  
  const [show, setShow] = new useState(false);

  const startLoading = () => setShow(true);

  const notLoading = () => setShow(false);

  function resetLoginInputs() {
    loginemail.current.value = '';
    loginpassword.current.value = '';
  }

  async function getValidation() {

    //'http://localhost:3001/login/user/auth' || 'https://ecomm-be-server.herokuapp.com/login/user/auth'
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
        email: loginemail.current.value,
        password: loginpassword.current.value
      })
    });
    
    if(response.status !== 200) {
      const err = await response.text();
      setValidator(err);
      notLoading();
    }else {
      const username = await response.text();
      sessionStorage.setItem('user', username);
      sessionStorage.setItem('authenticated', true);
      setAuthentication(previous => ({...previous, user: username, authenticated: true}));
      setValidator('');
      notLoading();
    }
  }

  function handleValidation(e) {
    e.preventDefault();
    startLoading();

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
      <Loader show={true} onHide={notLoading}/>
      <div className="login-container">
        <h3 className='login'>Login</h3>
        <h5 id='login-error'>{validator}</h5>
        <form className='login-form' action='/' method='POST'> 
          <div>
            <label htmlFor='email'>Email</label>
            <input required={true} type='text' name='email' id='email' autoComplete="off" ref={loginemail}/>
          </div>

          <div>
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