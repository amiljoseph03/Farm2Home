import React from 'react';
import '../styles/FeaturedSection.css';


import f2 from '../assets/home/f2.png';


const FeaturedSection = () => {
  return (
    <section className="top-selling">
      <h2>
        <span>Featured Items...</span>
      </h2>

      <div className="selling-grid">
        <div className="selling-card">
          <img src={f2} alt="Calathea Plant" />
          <h3>Calathea Plant</h3>
          <p>Healthy indoor air purifier plant</p>
          <div className="price">Rs. 309/-</div>
        </div>

        <div className="selling-card">
          <img src={f2} alt="Desk Plant" />
          <h3>Desk Plant</h3>
          <p>Perfect plant for office desks</p>
          <div className="price">Rs. 359/-</div>
        </div>

        <div className="selling-card">
          <img src={f2} alt="Snake Plant" />
          <h3>Snake Plant</h3>
          <p>Low maintenance greenery plant</p>
          <div className="price">Rs. 399/-</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
