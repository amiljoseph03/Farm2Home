import React from 'react';
import './RentDetails.css';

const EquipmentDetails = () => {
  return (
    <div className="details-page">
      <div className="details-card">
        {/* IMAGE SECTION */}
        <div className="details-image">
          <img
            src="https://i.pinimg.com/736x/9d/77/21/9d77210dc8a1131f3fedd601cda736ef.jpg"
            alt="Tractor"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="details-info">
          <h2>Tractor (Medium)</h2>
          <p className="price">₹1500 / day</p>

          <div className="info-row">
            <span>Category</span>
            <span>Farming Equipment</span>
          </div>

          <div className="info-row">
            <span>Availability</span>
            <span className="available">Available</span>
          </div>

          <div className="info-row">
            <span>Fuel Type</span>
            <span>Diesel</span>
          </div>

          <div className="info-row">
            <span>Usage</span>
            <span>Ploughing, Harvesting</span>
          </div>

          <div className="date-section">
            <div>
              <label>Start Date</label>
              <input type="date" />
            </div>

            <div>
              <label>End Date</label>
              <input type="date" />
            </div>
          </div>

          <button className="rent-btn">Proceed payment</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
