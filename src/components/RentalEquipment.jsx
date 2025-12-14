import '../styles/RentalEquipment.css';

import tractor from '../assets/rental/tractor.jpg';
import harvestor from '../assets/rental/harvestor.jpg';
import tiller from '../assets/rental/tiller.jpg';

const equipments = [
  {
    name: 'Tractor',
    price: '₹1200 / day',
    image: tractor,
  },
  {
    name: 'Harvester',
    price: '₹2500 / day',
    image: harvestor,
  },
  {
    name: 'Power Tiller',
    price: '₹800 / day',
    image: tiller,
  },
];

const RentalEquipment = () => {
  return (
    <div className="rental-page">
      <h2 className="rental-title">Rental Equipment</h2>
      <p className="rental-subtitle">
        Rent modern agricultural equipment at affordable prices
      </p>

      <div className="rental-grid">
        {equipments.map((item, index) => (
          <div className="rental-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalEquipment;
