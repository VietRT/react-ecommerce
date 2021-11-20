import React, {useEffect} from "react";
import '../css/paymentmade.css';
import Navbar from '../home/Navbar';
import dropdata  from '../data_models/Dropdown_Data';

function PaymentMade() {

  useEffect(() => {
    sessionStorage.clear();
  })

  return (
    <session className='paymentmade-container'>
      <Navbar items={dropdata}/>
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