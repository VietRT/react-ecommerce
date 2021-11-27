import React, {useState, useContext} from "react";
import {cartContext} from '../context/cartContext';
import Navbar from '../home/Navbar';
import Loader from '../load/Loader';
import dropData from '../data_models/Dropdown_Data';
import '../css/cart.css';

function Cart() {

  const [show, setShow] = new useState(false);
  const {currentCart, setCurrentCart} = new useContext(cartContext);
  const [total, setTotal] = new useState(() => { 

    switch(currentCart.length) {
      case 0: 
        return 0;
      case 1: 
        return parseFloat(currentCart[0].price);
      default:
        let initTotal = 0;   

        currentCart
        .map((item) => {
          return parseFloat(item.price);
        })
        .reduce((prev, current) => {
          return initTotal = prev + current;
        });
          return initTotal.toFixed(2);
      }
  });

  const startLoading = () => setShow(true);
  const notLoading = () => setShow(false);

  function removeItem(e) {
    const copy = [...currentCart];

    const indexToRemove = copy.findIndex(item => item.id === e.target.parentNode.id );
    copy.splice(indexToRemove, 1);

    setCurrentCart(copy);

    setTotal(() => {
      let newTotal = 0;
      copy.forEach((item) => {
        newTotal = newTotal + parseFloat(item.price);
      });
      return newTotal.toFixed(2);
    });
  }

  // create payment intent if planning to expand transaction situataions
  // async function createPaymentIntent() {}

  async function fetchCheckoutSession() {

    const stripeData = [];

    currentCart.forEach(item => {
      stripeData.push({id: item.id, size: item.size, quantity: item.quantity});
    });

    //'http://localhost:3001/create-stripe-session' || 'https://ecomm-be-server.herokuapp.com/create-stripe-session'
    const response = await fetch('https://ecomm-be-server.herokuapp.com/create-stripe-session', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(stripeData)
      });

      if(response.status !== 200) {
        const error = await response.text();
        throw new Error(error);
        notLoading();
      }else {
        const success = await response.text();
        window.location.href = JSON.parse(success).url;
        notLoading();
      }
  }

  async function handlePayment() {
    startLoading();

    try {
      await fetchCheckoutSession();      
    }catch(err) {
      console.log(err.message);
    }
  }

  function handleQuantityChange(e) {
    let copy = [...currentCart];

    let quantity = null;

    copy = copy.map((item, index) => {

      if(item.id === e.target.parentNode.id) {     
      
        e.target.value > 0 && e.target.value <= 25 ? item.price = (parseFloat(item.originalPrice) * e.target.value).toFixed(2) : item.price = (parseFloat(item.originalPrice) * 25).toFixed(2);
      
        quantity = e.target.value > 25 ? 25 : e.target.value;

        return {
          id: item.id, 
          title:item.title, 
          size: item.size, 
          originalPrice: item.originalPrice, 
          price: item.price, 
          quantity: quantity 
        };   
      }
      else {
        return item;
      }    
    });

    setCurrentCart(copy);

    setTotal(() => {
      let newTotal = 0;
      copy.forEach((item) => {
        newTotal = newTotal + parseFloat(item.price);
      });
      return newTotal.toFixed(2);
    });
  }

  return (
    <section>
      <Loader show={show} onHide={notLoading} />
      <Navbar items={dropData} />
      <ul className="cart-list">
        {currentCart.map((item) => {
          return <li className="cart-item" id={item.id} key={item.id}>
                    <h3 id='cart-product-title'>{item.title} | Size: {item.size} | Price: ${parseFloat(item.price)}</h3>                    
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
        <button type="button" id="checkout-btn" onClick={handlePayment} hidden={currentCart.length > 0 ? false : true}>Checkout</button>       
      </div>
      <p id='checking-warning' hidden={currentCart.length > 0 ? false : true}>[Checkout button may an extra click or a second to respond.]</p>
          
    </section>
  );
}

export default Cart;