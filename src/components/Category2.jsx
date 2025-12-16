import React from 'react';
import '../styles/Category2.css';

import veg from '../assets/categories/vegetables.jpg';
import grains from '../assets/categories/grains.jpg';
import seeds from '../assets/categories/seeds.jpg';
import fruits from '../assets/categories/fruits.jpg';

import { Link } from 'react-router-dom';


const categories = [
  { name: 'Vegetables', img: veg },
  { name: 'Grains', img: grains },
  { name: 'Seeds', img: seeds },
  { name: 'Fruits', img: fruits },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            {/* CATEGORY NAME */}
            <div className="category-title">{cat.name}</div>

            {/* IMAGE */}
            <div className="image-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>

            {/* BUTTON */}
            {/* <button className="view-btn">View Products</button> */}
            <Link to="/veg">
              <button className="view-btn">View Products</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
