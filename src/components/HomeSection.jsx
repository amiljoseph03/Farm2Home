import '../styles/HomeSection.css';
import f3 from '../assets/home/f3.jpg'; 

import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <img src={f3} alt="Farm" className="hero-img" />

      <div className="hero-text">
        <h1>Fresh & Organic Farm Products</h1>
        <p>Bringing naturally grown foods straight to your home.</p>

        {/* <div className="hero-buttons">
          <a href="/shop" className="btn-primary">
            Shop Now
          </a> */}

        <div className="hero-buttons">
          <Link to="/category2" className="btn-primary">
            Shop Now
          </Link>
          {/* <a href="/rent" className="btn-secondary">
            Rent Equipment
          </a> */}
          <Link to="/rent" className="btn-primary">
          Rent Equipment
          </Link>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;
