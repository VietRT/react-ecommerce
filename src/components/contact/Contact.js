import React from "react";
import Navbar from '../home/Navbar';
import dropData from '../data_models/Dropdown_Data';

function Contact() {
  return (
    <Navbar items={dropData} />
  );
}

export default Contact;