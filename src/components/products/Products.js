import Navbar from '../home/Navbar';
import '../css/products.css';
import productsList from "../data_models/Products_Data";
import Footer from '../home/Footer';
import {Link} from 'react-router-dom';


function Products() {
  

  return (
    <section>
      <Navbar cartQuantity={sessionStorage.length} isHidden={sessionStorage.length > 0 ? false : true}/>
      <h1 className="merchandise-text">Merchandise</h1>
      <div className="grid-container">
        <ul className="list-container">
          {productsList.map(item => {
            return <li className="clothe-item" key={item.id}>
              <Link to={`/product/${item.id}`} >
                <img src={item.img} alt="clothing"/> 
                <h3 id="product-caption">{item.title}</h3>
                <h5 id="product-caption">{item.price}</h5>
              </Link>
            </li>
          })}
        </ul>
      </div>
      <Footer />
    </section>    
  );
}

export default Products;