import React, {useState} from 'react';
import Navbar from '../home/Navbar';
import '../css/products.css';
import dropData from '../data_models/Dropdown_Data';
import productsList from "../data_models/Products_Data";
import Footer from '../home/Footer';
import {Link} from 'react-router-dom';


  function Products() {

  const appendUrl = window.location.pathname.substring(10);

  const [selected, setSelected] = new useState(productsList[dropData.findIndex((item) => {
    return item.menuItem.toLowerCase() === appendUrl;
  })]);

  function handleSelected(e) {    
      dropData.forEach((item) => {
        if(item.menuItem === e.target.textContent) {         
          setSelected(productsList[item.id]);
        }
      });
    }

  return (
    <section>
      <Navbar handleDropdownSelect={handleSelected} items={dropData}/>     
      <div className="grid-container">
      <h1 className="merchandise-text">Merchandise</h1>
        <ul className="products-container">
          {selected.map(item => {
            return <li className="clothe-item" key={item.id}>
              <Link to={`/product/${appendUrl}/${item.id}`} >
                <img id='products-img' src={item.img} alt="clothing"/> 
                <h3 className="product-caption">{item.title}</h3>
                <h5 className="product-caption">{item.price}</h5>
              </Link>
            </li>
          })}
        </ul>
      </div>
      {/* <Footer /> */}
    </section>    
  );
}

export default Products;