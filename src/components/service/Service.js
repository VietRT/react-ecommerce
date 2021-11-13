import React from 'react';
import Navbar from '../home/Navbar';
import dropdata from '../data_models/Drop_Data';

function Service() {
  return (
    <Navbar items={dropdata} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true} />
  );
}

export default Service;