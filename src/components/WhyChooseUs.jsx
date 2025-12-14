import '../styles/WhyChooseUs.css';

import img1 from '../assets/whyus/img1.jpg';
import img2 from '../assets/whyus/img2.jpg';
import img3 from '../assets/whyus/img3.jpg';
import img4 from '../assets/whyus/img4.jpg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="why-container">
        {/* LEFT IMAGES */}
        <div className="why-images">
          <img src={img1} alt="Farmers" />
          <img src={img2} alt="Fresh Produce" />
          <img src={img3} alt="Organic Farming" />
          <img src={img4} alt="Quality Products" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">
          <h2>Why Choose Us?</h2>
          <p>
            We deliver fresh, organic, and sustainable agricultural products
            directly from trusted farmers to your home.
          </p>

          <div className="progress">
            <span>Fresh Products</span>
            <div className="bar">
              <div style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span>Trusted Farmers</span>
            <div className="bar">
              <div style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span>Eco-Friendly Practices</span>
            <div className="bar">
              <div style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
