import React from "react";
import '../css/paymentmade.css';
import Navbar from '../home/Navbar';
import dropdata  from '../data_models/Dropdown_Data';
import {Link} from 'react-router-dom';

function PaymentMade() {

  return (
    <session className='paymentmade-container'>
      <Navbar items={dropdata}/>
      <div className='thank-you-wrapper'>
        <div>
          <p>Thank you</p>
          <p className='payment-received'>Payment has been received and your order will be process and receive notification when order has shipped.</p>
          <button type='button' id='back-to-home'>
            <Link to='/'>Return to Homepage</Link>
          </button>
        </div>       
      </div>
      
    </session>
  );
}

export default PaymentMade;