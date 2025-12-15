import React from 'react';
import '../styles/FeaturedSection.css';

import p1 from '../assets/home/p11.jpg';
import p2 from '../assets/home/p2.jpg';
import p3 from '../assets/home/p3.jpg';
import p4 from '../assets/home/p4.jpg';

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
          <h3>Fresh Corn</h3>
          <p>Healthy indoor air purifier plant</p>
          <div className="price">Rs. 30/-</div>
        </div>

        <div className="selling-card">
          <div className="image-box">
            <img src={p2} alt="Desk Plant" />
          </div>
          <h3>Tomato</h3>
          <p>Perfect plant for office desks</p>
          <div className="price">Rs. 35/-</div>
        </div>
        <div className="selling-card">
          <div className="image-box">
            <img src={p4} alt="Desk Plant" />
          </div>
          <h3>Banana</h3>
          <p>Perfect plant for office desks</p>
          <div className="price">Rs. 35/-</div>
        </div>

        <div className="selling-card">
          <div className="image-box">
            <img src={p3} alt="Snake Plant" />
          </div>
          <h3>Egg</h3>
          <p>Low maintenance greenery plant</p>
          <div className="price">Rs.8/-</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
