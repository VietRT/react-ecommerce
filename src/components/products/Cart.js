import React, {useState} from "react";
import Navbar from '../home/Navbar';
import '../css/cart.css';

function Cart() {

  const [cart, setCart] = new useState(() => {
    let initCart = [];
    
    Object.entries(sessionStorage).forEach((item) => {   
      initCart.push(JSON.parse(item[1]));
    });
    return initCart.reverse();
  });

  const [total, setTotal] = new useState(() => { 
    if(sessionStorage.length > 0) {
      let initTotal = 0;   
      initTotal = Object.values(sessionStorage)
      .map((item) => {
      return parseFloat(JSON.parse(item).price);
      })
      .reduce((prev, current) => {
      return prev + current;
      });   
      return initTotal.toFixed(2);
    }else {
      return 0;
    }   
  });

  function removeItem(e) {
    const copy = [];

    sessionStorage.removeItem(e.target.parentNode.id);
    Object.entries(sessionStorage).forEach((item) => {
      copy.push(JSON.parse(item[1]));
    });

    setCart(copy);

    
    setTotal(() => {
      let newTotal = 0;
      copy.forEach((item) => {
        newTotal = newTotal + parseFloat(item.price);
      });
      return newTotal.toFixed(2);
    });
  }

  //TODO: create payment intent if planning to expand transaction situataions
  // async function createPaymentIntent() {

  // }

  async function fetchCheckoutSession() {

    const stripeData = [];
    cart.forEach(item => {
      stripeData.push({id: item.id, quantity: item.quantity});
    });

    const response = await fetch('http://localhost:3001/create-stripe-session', ({
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(stripeData)
      }));

      if(response.status !== 200) {
        const error = await response.text();
        throw new Error(error);
      }else {
        const success = await response.text();
        window.location.href = JSON.parse(success).url;
        
        // sessionStorage.clear(); //TODO: clearing of storage should happen only if the customer has made a successful payment.

      }
  }

  async function handlePayment() {

    try {
      await fetchCheckoutSession();      
    }catch(err) {
      console.log(err.message);
    }


  }

  function handleQuantityChange(e) {

    let copy = [...cart];
    let originalPrice = 0;

    let quantity = null;

    copy = copy.map((item, index) => {
    originalPrice = parseFloat(JSON.parse(Object.values(sessionStorage)[index]).originalPrice);
    
    if(item.id === e.target.parentNode.id) {     
    
      e.target.value > 0 && e.target.value <= 25 ? item.price = (originalPrice * e.target.value).toFixed(2) : item.price = (originalPrice * 25).toFixed(2);
    
      quantity = e.target.value > 25 ? 25 : e.target.value;

      return {id: item.id, title:item.title, size: item.size, originalPrice: copy[index].originalPrice, price: item.price, quantity: quantity};   

    }else {
      return item;
    }    
  });

  setCart(copy);

  setTotal(() => {
    let newTotal = 0;
    copy.forEach((item) => {
      newTotal = newTotal + parseFloat(item.price);
    });
    return newTotal.toFixed(2);
  });
  sessionStorage.setItem(e.target.parentNode.id, JSON.stringify(copy[copy.findIndex((item) => { 
    return item.id === e.target.parentNode.id 
  })]));

  }


  return (

    <section>
      <Navbar cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
      <ul className="cart-list">
        {cart.map((item) => {
          return <li className="cart-item" id={item.id} key={item.id}>
                    <h3>{item.title} | Size: {item.size} | Price: ${parseFloat(item.price)}</h3>                    
                    <label htmlFor="quantity">
                      Quantity
                    </label>                   
                    {/* TODO: input needs to be adjusted better to suit for maximums above 25 and entering nothing (blank input) */}
                    <input type="number" id="quantity" name="quantity" maxLength={2} defaultValue={item.quantity} min={1} max={25} onChange={handleQuantityChange} />
                    <button type="button" id="deleteBtn" name="deleteBtn" onClick={removeItem}>Remove</button>                    
                  </li>
        })}
      </ul>
      <h6 className='max-items'>Max Quantity is 25, any amount bought over the max will be submitted at 25.</h6>
      <h5 className="total" onChange={setTotal}>Total: ${total}</h5>
      <div className="checkout"> {/* the checkout button should only appear if there is an item to be sold in the cart */}
        <button type="button" id="checkout-btn" onClick={handlePayment} hidden={sessionStorage.length > 0 ? false : true}>Checkout</button>
      </div>
          
    </section>
  );
}

export default Cart;