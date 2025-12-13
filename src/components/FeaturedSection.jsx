import React from 'react';
import '../styles/FeaturedSection.css';

import p1 from '../assets/home/p1.jpg';
import p2 from '../assets/home/p2.jpg';
import p3 from '../assets/home/p3.jpg';

const FeaturedSection = () => {
  return (
    <section className="top-selling">
      <h2>
        <span>Featured Items...</span>
      </h2>

      <div className="selling-grid">
        <div className="selling-card">
          <div className="image-box">
            <img src={p1} alt="Calathea Plant" />
          </div>
          <h3>Calathea Plant</h3>
          <p>Healthy indoor air purifier plant</p>
          <div className="price">Rs. 309/-</div>
        </div>

        <div className="selling-card">
          <div className="image-box">
            <img src={p2} alt="Desk Plant" />
          </div>
          <h3>Desk Plant</h3>
          <p>Perfect plant for office desks</p>
          <div className="price">Rs. 359/-</div>
        </div>

        <div className="selling-card">
          <div className="image-box">
            <img src={p3} alt="Snake Plant" />
          </div>
          <h3>Snake Plant</h3>
          <p>Low maintenance greenery plant</p>
          <div className="price">Rs. 399/-</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
