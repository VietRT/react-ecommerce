import React from "react";
import slidesData from '../data_models/Slides_Data';
import '../css/slides.css';
import {useState} from 'react';

//component is deprecated since creation of carousel component from react-bootstrap

function Slides() {

  let [product, setProduct] = new useState(slidesData[0]);


  function handleNextSlide(event) {
    event.preventDefault();  
    if(slidesData.findIndex(index => index.id === product.id) < slidesData.length-1) {
      setProduct(() => {
        return slidesData[slidesData.findIndex(index => index.id === product.id)+1];
      });
    }
    else {
      setProduct(() => {
        return slidesData[0];
      });
    }
        
  }

  function handlePreviousSlide(event) {
    event.preventDefault();
    if(slidesData.findIndex(index => index.id === product.id) > 0) {
      setProduct(() => {
        return slidesData[slidesData.findIndex(index => index.id === product.id)-1];
      });
    }
    else {
      setProduct(() => {
        return slidesData[slidesData.length-1];
      });
    }
    
  }

  return (
    <>
    <section>     
      <div className="card">       
        <img src={product.img} alt="product" />
        <h1 id="price">{product.title}</h1>
        <h5 id="description">{product.description}</h5>                  
      </div>    
      <div className="buttons-wrapper">
        <button className='slide-btn' type="text" id="previous" onClick={handlePreviousSlide}>Previous</button>
        <button className='slide-btn' type="text" id="next" onClick={handleNextSlide}>Next</button>  
      </div>
    </section>    
    </>
  );
}

export default Slides;