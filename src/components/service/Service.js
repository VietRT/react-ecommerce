import React from 'react';
import Navbar from '../home/Navbar';

function Service() {
  return (
    <Navbar cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
  );
}

export default Service;