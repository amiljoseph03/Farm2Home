import '../styles/Delivery.css';
import deliveryBoy from '../assets/delivary/deliboy.jpg';

const DeliverySection = () => {
  return (
    <section className="delivery-section">
      <h3 className="delivery-title">VISIT OUR LOCATION</h3>

      <div className="delivery-container">
        {/* LEFT CONTENT */}
        <div className="delivery-left">
          <img src={deliveryBoy} alt="Delivery" className="delivery-img" />

          <div className="location-info">
            <h2>Farm2Home</h2>
            <p>Fresh Agricultural Products & Equipment</p>

            <ul>
              <li>📍 Kerala, India</li>
              <li>🕒 Mon – Sat: 8:00 AM – 7:00 PM</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@greenfarm.com</li>
            </ul>
          </div>
        </div>

        {/* MAP */}
        <div className="delivery-map">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
