import '../styles/PriceList.css';
import banana from '../assets/prices/banana.jpg';
import egg from '../assets/prices/egg.jpg';
import milk from '../assets/prices/milk.jpg';
import corn from '../assets/prices/corn.jpg';

const priceItems = [
  { name: 'Banana', price: '₹60 / dozen', image: banana },
  { name: 'Egg', price: '₹7 / piece', image: egg },
  { name: 'Milk', price: '₹55 / litre', image: milk },
  { name: 'Tomato', price: '₹30 / kg', image: corn },
];

const PriceList = () => {
  return (
    <section className="price-page">
      <h1 className="price-title">Today’s Price</h1>

      <div className="price-grid">
        {priceItems.map((item, index) => (
          <div className="price-card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="price-info">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceList;
