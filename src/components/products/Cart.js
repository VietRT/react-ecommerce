import React, {useRef, useState} from "react";
import Navbar from '../home/Navbar';
import '../css/cart.css';

function Cart() {

  let [cart, setCart] = new useState(() => {
    let initCart = [];
    
    Object.entries(sessionStorage).forEach((item) => {
      initCart.push(JSON.parse(item[1]));
    });
    return initCart;
  });

  //TODO:this needs fixing, breaks if cart is clicked on 0 items in cart since reduce errors out on empty array
  let [total, setTotal] = new useState(() => { 
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

  function handlePrice(e) {

    let copy = [...cart];
    let originalPrice = 0;

    copy = copy.map((item, index) => {
    originalPrice = parseFloat(JSON.parse(Object.values(sessionStorage)[index]).price);

    if(item.id === e.target.parentNode.id) {     
      if(e.target.value > 0) { 
        
        item.price = (originalPrice * e.target.value).toFixed(2);            
      }   
      return {id: item.id, title:item.title, price: item.price};      
    }else {
      return item;
    }
    
  })
  setCart(copy);

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
      <Navbar isHidden={sessionStorage.length > 0 ? false : true} cartQuantity={sessionStorage.length}/>
      <ul className="cart-list">
        {cart.map((item) => {
          return <li className="cart-item" id={item.id} key={item.id}>
                    <h3>Item: {item.title} | Price: ${parseFloat(item.price)}</h3>                    
                    <label htmlFor="quantity">
                      quantity
                    </label>                    
                    <input type="number" id="quantity" name="quantity" maxLength={2} defaultValue={1} min={1} max={25} onChange={handlePrice}/>
                    <button type="button" id="deleteBtn" name="deleteBtn" onClick={removeItem}>remove</button>
                    <h6>Max Quantity is 25</h6> 
                  </li>
        })}
      </ul>
      <h5 className="total" onChange={setTotal}>Total: ${total}</h5>
    </section>
  );
}

export default Cart;