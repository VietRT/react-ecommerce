import React from "react";
import Navbar from '../home/Navbar';
import dropData from '../data_models/Dropdown_Data';

function Trending() {
  return(
    <Navbar items={dropData} />
  );
}

export default Trending;