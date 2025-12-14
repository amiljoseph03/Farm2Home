import '../styles/AgriTips.css';

import tipsImg from '../assets/tips/agri-tips.jpg';
import pestImg from '../assets/tips/pest-control.jpg';

const AgriTips = () => {
  return (
    <section className="agri-section">
    
      <div className="agri-row">
        <div className="agri-image">
          <img src={pestImg} alt="Agricultural Tips" />
        </div>

        <div className="agri-content">
          <h2>Agricultural Tips</h2>
          <p>
            Improve crop yield by adopting modern and sustainable farming
            practices. Focus on soil health, quality seeds, and proper
            irrigation for best results.
          </p>
          <ul>
            <li>✔ Soil testing before planting</li>
            <li>✔ Crop rotation</li>
            <li>✔ Balanced fertilizers</li>
          </ul>
        </div>
      </div>

     
      <div className="agri-row reverse">
        <div className="agri-image">
          <img src={tipsImg} alt="Natural Pest Control" />
        </div>

        <div className="agri-content">
          <h2>Natural Pest Control</h2>
          <p>
            Control pests naturally without harmful chemicals. These methods are
            eco-friendly and safe for farmers and consumers.
          </p>
          <ul>
            <li>🌿 Neem oil spray</li>
            <li>🌶 Garlic & chili solution</li>
            <li>🐞 Beneficial insects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgriTips;
