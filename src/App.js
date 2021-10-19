import React from 'react';
import RenderSlide from './components/RenderSlide';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Footer from './components/Footer';



function App() {
  return (
    <main>
      <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true}/>
      <RenderSlide />
      <Introduction />  
      <Footer />    
    </main>  
  );
}

export default App;