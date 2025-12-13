import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';

import veg from '../assets/categories/vegetables.jpg';
import grains from '../assets/categories/grains.jpg';
import seeds from '../assets/categories/seeds.jpg';
import fruits from '../assets/categories/fruits.jpg';
import equipment from '../assets/categories/equipment.jpg';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Vegetables', image: veg, path: 'vegetables' },
    { name: 'Grains', image: grains, path: 'grains' },
    { name: 'Seeds', image: seeds, path: 'seeds' },
    { name: 'Fruits', image: fruits, path: 'fruits' },
    { name: 'Equipment', image: equipment, path: 'equipment' },
  ];

  return (
    <section className="category-section">
      <h2>🌿 Shop by Category</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(`/category/${cat.path}`)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
