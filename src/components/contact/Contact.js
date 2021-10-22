import React from "react";
import Navbar from '../home/Navbar';

function Contact() {
  return (
    <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true} />
  );
}

export default Contact;