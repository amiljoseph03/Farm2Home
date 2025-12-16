import React from 'react';
import '../styles/Subscription.css';

const services = [
  {
    title: 'Vegetable ',
    description:
      'Get fresh, seasonal vegetables delivered to your doorstep every week.',
    img: 'https://i.pinimg.com/736x/d0/ad/51/d0ad5100c4cbf071933054221db03bff.jpg',
  },

  {
    title: 'Milk ',
    description:
      'Receive pure, fresh milk daily from local farms directly to your home.',
    img: 'https://i.pinimg.com/1200x/6b/18/f1/6b18f1a78dedb6b58296b6843e7e4643.jpg',
  },
  {
    title: 'Egg ',
    description:
      'Enjoy farm-fresh eggs delivered regularly for your family’s breakfast needs.',
    img: 'https://i.pinimg.com/1200x/37/19/cc/3719ccbee5f4fd00df53f4579414fb91.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Weekly & Monthly Product Subscriptions</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Subscribe Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
