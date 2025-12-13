import '../styles/Category2.scss';
import React, { useState, useEffect } from 'react';
import veg from '../assets/categories/vegetables.jpg';
import grains from '../assets/categories/grains.jpg';
import seeds from '../assets/categories/seeds.jpg';
import fruits from '../assets/categories/fruits.jpg';
import equipment from '../assets/categories/equipment.jpg';


const cards = [
  {
    image: veg,
    title: 'Vegetables',
    text: 'Fresh organic vegetables directly from farms.',
    button: 'View Products',
  },
  {
    image: grains,
    title: 'Grains',
    text: 'High quality grains for healthy living.',
    button: 'View Products',
  },
  {
    image: seeds,
    title: 'Seeds',
    text: 'Certified seeds for better yield.',
    button: 'View Products',
  },

  {
    image: fruits,
    title: 'Fruits',
    text: 'Certified seeds for better yield.',
    button: 'View Products',
  },
];


const Card = ({ image, title, text, button }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <h2 className="card__title">{title}</h2>
      <p>{text}</p>
      <button className="card-btn">{button}</button>
    </div>
  );
};


const Category2 = () => {
  return (
    <section className="category-page">
      <h1 className="page-title">Shop by Category</h1>

      <div className="category-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            button={card.button}
          />
        ))}
      </div>
    </section>
  );
};

export default Category2;
