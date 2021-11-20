import React, { useState } from "react";
import Navbar from '../home/Navbar';
import Product_Data from '../data_models/Product_Data';
import dropData from '../data_models/Dropdown_Data';
import '../css/product.css';

function Product() {

  const uri = window.location.pathname;

  const itemId = uri.substring(uri.lastIndexOf('/')+ 1);

  const item_list = Product_Data[Product_Data.findIndex(index => { return index.id === itemId })];

  const [itemAmount, setItemAmount] = new useState(sessionStorage.length);
  const [size, setSize] = new useState({sizeSelected: 'XS'});

  function handleSize(e) {
    setSize({sizeSelected: e.target.value});
  }
 
  function addToCart() {
    let cart = window.sessionStorage;
    cart.setItem(item_list.id, JSON.stringify({
      id: item_list.id,
      title: item_list.title,
      size: size.sizeSelected,
      originalPrice: item_list.price,
      price: item_list.price,
      quantity: 1
    }));
    setItemAmount();
  }

  return (
    <section>
      <Navbar items={dropData} />
      <div className="product-container">
        <img src={item_list.img} alt="product_image" />
        <div className="product-options"> 
          <p id='product-name'>{item_list.title}</p>
          <p id='product-price'>{item_list.price}</p>
          <label htmlFor="sizing">Select Size</label>
          <select name="sizing" id="sizing-drop" onChange={handleSize}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <p></p>
          <button type="submit" id="add-to-cart" onClick={addToCart}>Add To Cart</button>
        </div>
    </div>
    </section>
  );
}

export default Product;