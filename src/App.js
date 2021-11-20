import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Carousel from './components/home/RenderCarousel';
import Navigation from './components/home/Navbar';
import dropData from './components/data_models/Dropdown_Data';
import Session from './components/home/Session';
import Footer from './components/home/Footer';

function App() {

  return (
    <main>
      <Navigation items={dropData} />
      <Carousel />
      <Session />  
      <Footer />  
    </main>  
  );
}

export default App;