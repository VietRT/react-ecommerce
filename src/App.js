import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import RenderSlide from './components/home/RenderSlide';
import Navigation from './components/home/Navbar';
import dropData from './components/data_models/Dropdown_Data';
import Introduction from './components/home/Introduction';
import Footer from './components/home/Footer';

function App() {

  return (
    <main>
      <Navigation items={dropData} cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true}/>
      <RenderSlide />
      <Introduction />  
      <Footer />  
    </main>  
  );
}

export default App;