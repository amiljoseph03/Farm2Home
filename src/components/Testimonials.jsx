import '../styles/Testimonials.css';

import user1 from '../assets/testimonials/user1.jpg';
import user2 from '../assets/testimonials/user2.jpg';
import user3 from '../assets/testimonials/user3.jpg';

const testimonials = [
  {
    image: user1,
    name: 'Anitha R',
    text: 'Very good quality agricultural products. Fresh vegetables and timely delivery.',
    rating: 5,
  },
  {
    image: user2,
    name: 'Rahul K',
    text: 'Best platform for farmers. Equipment rental service is very useful.',
    rating: 5,
  },
  {
    image: user3,
    name: 'Suresh M',
    text: 'Affordable prices and excellent customer support. Highly recommended.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        Growing Trust with Every Harvest <span>Voices from our customers</span>
      </h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-avatar">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="testimonial-content">
              <div className="stars">
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
              </div>

              <p>{item.text}</p>
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
