import React from "react";
import slideshowData from '../data_models/Slideshow_Data';
import '../css/slideshow.css';
import {useState} from 'react';

function Card() {

  let [product, setProduct] = new useState(slideshowData[0]);


  function handleNextSlide(event) {
    event.preventDefault();  
    if(slideshowData.findIndex(index => index.id === product.id) < slideshowData.length-1) {
      setProduct(() => {
        return slideshowData[slideshowData.findIndex(index => index.id === product.id)+1];
      });
    }
    else {
      setProduct(() => {
        return slideshowData[0];
      });
    }
        
  }

  function handlePreviousSlide(event) {
    event.preventDefault();
    if(slideshowData.findIndex(index => index.id === product.id) > 0) {
      setProduct(() => {
        return slideshowData[slideshowData.findIndex(index => index.id === product.id)-1];
      });
    }
    else {
      setProduct(() => {
        return slideshowData[slideshowData.length-1];
      });
    }
    
  }


  return (
    <>
    <section>     
      <div className="card">       
        <img src={product.img} alt="product" />
        <h1 className="price">{product.price}</h1>
        <h2 className="description">{product.description}</h2>                  
      </div>    
      <div className="buttons-wrapper">
        <button type="text" className="previous" onClick={handlePreviousSlide}>Previous</button>
        <button type="text" className="next" onClick={handleNextSlide}>Next</button>  
      </div>
    </section>    
    </>
  );
}

export default Card;