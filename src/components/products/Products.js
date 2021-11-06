import React, {useState} from 'react';
import Navbar from '../home/Navbar';
import '../css/products.css';
import dropdata from '../data_models/Drop_Data';
import productsList from "../data_models/Products_Data";
import Footer from '../home/Footer';
import {Link} from 'react-router-dom';


  function Products(props) {

  const appendUrl = window.location.pathname.substring(10);
    
  const [selected, setSelected] = new useState(productsList[dropdata.findIndex((item) => {
    return item.name.toLowerCase() === appendUrl;
  })]);

  function handleSelected(e) {    
      dropdata.forEach((item) => {
        if(item.name === e.target.textContent) {
          setSelected(productsList[item.id]);
        }
      });
    }

  return (
    <section>
      <Navbar cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} handleDropdownSelect={handleSelected}/>     
      <div className="grid-container">
      <h1 className="merchandise-text">Merchandise {props.choice}</h1>
        <ul className="list-container">
          {selected.map(item => {
            return <li className="clothe-item" key={item.id}>
              <Link to={`/product/${appendUrl}/${item.id}`} >
                <img src={item.img} alt="clothing"/> 
                <h3 className="product-caption">{item.title}</h3>
                <h5 className="product-caption">{item.price}</h5>
              </Link>
            </li>
          })}
        </ul>
      </div>
      <Footer />
    </section>    
  );
}

export default Products;