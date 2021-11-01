import React from "react";
import Navbar from '../home/Navbar';

function Contact() {
  return (
    <Navbar cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
  );
}

export default Contact;