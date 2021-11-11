import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import RenderSlide from './components/home/RenderSlide';
import Navbar from './components/home/Navbar';
import Introduction from './components/home/Introduction';
import Footer from './components/home/Footer';

function App() {

  return (
    <main>
      <Navbar cartAmount={sessionStorage.length} displayed={sessionStorage.length > 0 ? false : true}/>
      <RenderSlide />
      <Introduction />  
      <Footer />  
    </main>  
  );
}

export default App;