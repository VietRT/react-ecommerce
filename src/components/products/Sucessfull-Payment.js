import React from "react";
import '../css/paymentmade.css';
import Navbar from '../home/Navbar';

function PaymentMade() {
  return (
    <session className='paymentmade-container'>
      <Navbar cartAmount={sessionStorage.clear()} displayed={true}/>
      <div className='thank-you-wrapper'>
        <div>
          <p>Thank you</p>
          <p className='payment-received'>Payment has been received and your order will be process and notification received when order has shipped.</p>
        </div>       
      </div>
      
    </session>
  );
}

export default PaymentMade;