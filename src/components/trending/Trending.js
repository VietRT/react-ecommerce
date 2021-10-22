import React from "react";
import Navbar from '../home/Navbar';

function Trending() {
  return(
    <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true} />
  );
}

export default Trending;