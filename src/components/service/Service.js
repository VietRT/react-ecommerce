import React from 'react';
import Navbar from '../home/Navbar';

function Service() {
  return (
    <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true} />
  );
}

export default Service;