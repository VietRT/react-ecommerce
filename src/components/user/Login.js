import React from "react";
import Navbar from '../home/Navbar';
import {Link} from 'react-router-dom';
import dropdata from '../data_models/Drop_Data';
import '../css/login.css';

function Login() {
  return (
    <section>
      <Navbar items={dropdata} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
      <div className="login-container">
        <h3 className='login'>Login</h3>
        <form className='login-form' action='/' method='post'>  {/*action='/login/auth*/}
          <div>
            <label htmlFor='email'>Email</label>
            <input required={true} type='text' name='email' id='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>          
            <input required={true} type='password' name='password' id='password' />
          </div>

          <button type='submit' id='login-submit'>Log in</button>
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