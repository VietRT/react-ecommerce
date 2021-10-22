import React from "react";
import Navbar from '../home/Navbar';

function About() {
  return (
       <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true} />
  );
}

export default About;