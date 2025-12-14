import React from 'react';
import './Dashboard.css';

const stats = [
  { label: 'Purchases', value: 12 },
  { label: 'Rentals', value: 5 },
  { label: 'Subscriptions', value: 2 },
];

const recentActivity = [
  {
    title: 'Tomato Seeds Purchased',
    img: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924',
    info: '₹120 • Delivered',
  },
  {
    title: 'Tractor Rented',
    img: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c',
    info: '3 Days Rental',
  },
];

const subscriptions = [
  {
    title: 'Weekly Vegetables',
    img: 'https://i.pinimg.com/736x/f3/c2/11/f3c211781e529073e355481af50c5943.jpg',
    info: 'Next Delivery: 25 Sep',
  },
  {
    title: 'Organic Milk',
    img: 'https://i.pinimg.com/1200x/6b/18/f1/6b18f1a78dedb6b58296b6843e7e4643.jpg',
    info: 'Next Delivery: 26 Sep',
  },
];

const rentals = [
  {
    title: 'Power Tiller',
    img: 'https://i.pinimg.com/1200x/3c/6e/29/3c6e2905b34e61b603bd0bce029c543b.jpg',
    info: 'Return Date: 28 Sep',
  },
];

const Section = ({ title, data, variant }) => (
  <div className={`section ${variant || ''}`}>
    <div className="section-header">
      <h3>{title}</h3>
      <button>View all</button>
    </div>

    <div className="card-row">
      {data.map((item, index) => (
        <div className="image-card" key={index}>
          <img src={item.img} alt={item.title} />
          <div className="image-card-content">
            <h4>{item.title}</h4>
            <p>{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const userName = 'User...'; 
  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h1>Farm2Home</h1>
        <nav>
          <a className="active">Dashboard</a>
          <a>Browse Products</a>
          <a>Purchased Products</a>
          <a>Rented Items</a>
          <a>Subscriptions</a>
          <a>Reviews</a>
          <a>Profile</a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard">
        {/* WELCOME HEADING */}
        <div className="welcome-header">
          <h1>Welcome back, {userName}</h1>
          {/* <p>Here’s what’s happening with your account today.</p> */}
        </div>

        {/* STATS */}
        <div className="stats-row">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <p>{item.label}</p>
              <h2>{item.value}</h2>
            </div>
          ))}
        </div>

        {/* SECTIONS */}
        <Section title="Recent Activity" data={recentActivity} />
        <Section
          title="Active Subscriptions"
          data={subscriptions}
          variant="subscription-section"
        />
        <Section title="Active Rentals" data={rentals} />
      </main>
    </div>
  );
};

export default Dashboard;
