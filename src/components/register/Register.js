import React, {useState} from 'react';
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import dropData from '../data_models/Dropdown_Data';
import '../css/register.css';

function Register() {

  let [information, setInfo] = new useState({    
    email: '',
    password:'',
    username: ''
  });

  const [validator, setValidator] = new useState({
    message: '',
    style: {
      color: ''
    }
  });

  function handleSet(key) {
    return ({target: {value}}) => {
      setInfo(previousValue => ({...previousValue, [key]: value}));
    }
  };

  async function register() {
    //'http://localhost:3001/api/user' || 'https://ecomm-be-server.herokuapp.com/api/user'

    const response = await fetch('https://ecomm-be-server.herokuapp.com/api/user', {
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
    const error = await response.text();
    throw new Error(`${error}`);
  }else {
    const success = await response.text();
    setValidator(previous => ({...previous, message: success, style: {color: 'green'}}));
    setInfo({    
      email: '',
      password:'',
      username: ''
    });
  }

  }

  async function handleSubmit(e) {
    e.preventDefault();

      try {
        await register();
      }catch(err) {
        setValidator(previous => ({...previous, message: err.message, style: {color: 'red'}}));
      }
    



  }

  return (
    <section>
      <Navbar items={dropData} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true}/> 
      <div className='register-container'>
        <h3 className='register'>Create Account</h3>
        <h5 className='validator-message' style={validator.style}>{validator.message}</h5>
        <form className='register-form' action='/api/user' method='post'>

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