import React from "react";
import Navbar from '../Navbar';
import Products_Data from '../data_models/Products_Data';
import '../css/product.css';

function Product() {

  const item_list = Products_Data[Products_Data.findIndex(index => { return index.id === window.location.pathname.substring(9) })];

  



  return (
    <section>
      <Navbar />
      <div className="product-container">
        <img src={item_list.img} alt="product_image" />
        <div className="product-options"> 
          <h1>{item_list.title}</h1>
          <h3>{item_list.price}</h3>
          <label htmlFor="sizing">Select Size</label>
          <select name="sizing" id="sizing-drop">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <p></p>
          <button type="submit" id="add-to-cart">Add To Cart</button>
        </div>        
    </div>        
    </section>
  );
}

export default Product;