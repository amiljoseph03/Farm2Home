import './Vegetable.css';

const vegetables = [
  {
    name: 'Tomato',
    price: 40,
    availability: 'In Stock',
    img: 'https://i.pinimg.com/1200x/ed/43/71/ed43712526d28ebb149b03784e467c99.jpg',
  },
  {
    name: 'Potato',
    price: 30,
    availability: 'In Stock',
    img: 'https://i.pinimg.com/1200x/23/8e/79/238e79f7f9a521a156b53bdb4d4ce8f4.jpg',
  },
  {
    name: 'Onion',
    price: 45,
    availability: 'Limited',
    img: 'https://i.pinimg.com/1200x/97/71/f8/9771f8e20a8bf39498d9f7e33e65f2c0.jpg',
  },
  {
    name: 'Carrot',
    price: 55,
    availability: 'Out of Stock',
    img: 'https://i.pinimg.com/1200x/c2/06/82/c206828eddb953418033ffbce521110b.jpg',
  },
  {
    name: 'Tomato',
    price: 40,
    availability: 'In Stock',
    img: 'https://i.pinimg.com/1200x/6b/6a/d0/6b6ad099ce3d88402ded2c975756df7b.jpg',
  },
  {
    name: 'Potato',
    price: 30,
    availability: 'In Stock',
    img: 'https://i.pinimg.com/1200x/6a/cf/8e/6acf8e46cdd581d75ae44587d5f55a7a.jpg',
  },
  {
    name: 'Onion',
    price: 45,
    availability: 'Limited',
    img: 'https://i.pinimg.com/736x/5a/da/7b/5ada7b771a76b80521640f04b73abc75.jpg',
  },
  {
    name: 'Carrot',
    price: 55,
    availability: 'Out of Stock',
    img: 'https://i.pinimg.com/736x/be/ee/94/beee9450a3d3909385e2786510850546.jpg',
  },
  {
    name: 'Onion',
    price: 45,
    availability: 'Limited',
    img: 'https://i.pinimg.com/736x/d5/23/57/d52357c3524e3a86f1129827766e7f64.jpg',
  },
  {
    name: 'Carrot',
    price: 55,
    availability: 'Out of Stock',
    img: 'https://i.pinimg.com/1200x/e6/9d/ba/e69dba430da327b8a1a4e9457b324520.jpg',
  },
];

const VegetableList = () => {
  return (
    <section className="veg-section">
      <h2>Farm Fresh Vegetables</h2>

      <div className="veg-grid">
        {vegetables.map((veg, index) => (
          <div className="veg-card" key={index}>
            <img src={veg.img} alt={veg.name} />

            <div className="veg-info">
              <h3>{veg.name}</h3>
              <p className="price">₹{veg.price} / kg</p>
              <span
                className={`status ${
                  veg.availability === 'In Stock'
                    ? 'in'
                    : veg.availability === 'Limited'
                    ? 'limited'
                    : 'out'
                }`}
              >
                {veg.availability}
              </span>

              <button disabled={veg.availability === 'Out of Stock'}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VegetableList;
