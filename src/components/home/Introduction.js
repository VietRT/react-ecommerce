import React from "react";
import placeholder from '../images/Product_Placeholder.png';
import '../css/introduction.css';

function Introduction() {
  return (
    <section>
      <div className="intro">
        <img src={placeholder} alt="introduction" />
        <h5 className="intro-summary">I offer a variety of coaching that is flexible to everyone of all physique and will work with you to meet your goals! Give one of my coaching plans a try or feel free to buy a merchandise.</h5>
      </div>     
    </section>
  );
}

export default Introduction;