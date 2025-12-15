import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUser,
  FaStore,
  FaShoppingBag,
  FaTractor,
  FaRedoAlt,
  FaFileDownload,
} from 'react-icons/fa';

const stats = [
  { label: 'Total Purchases', value: 12 },
  { label: 'Total Rentals', value: 5 },
  { label: 'Total Subscriptions', value: 2 },
];

const recentActivity = [
  {
    title: 'Bean Seeds Purchased',
    img: 'https://i.pinimg.com/1200x/65/09/da/6509da5ff90408037d8c55905996b822.jpg',
    info: '₹120 • Delivered',
  },
  {
    title: 'Tractor Rented',
    img: 'https://i.pinimg.com/736x/e2/f7/f7/e2f7f742a4a7c318d909e0f287d9fcf5.jpg',
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
    info: 'Return Date: 28 December 2025',
  },
  {
    title: 'Tractor',
    img: 'https://i.pinimg.com/736x/c2/2e/94/c22e94a2a609b591e31e01821465c228.jpg',
    info: 'Return Date: 28 December 2025',
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
          <Link to="/dashboard" className="active">
            <FaTachometerAlt className="nav-icon" />
            Dashboard
          </Link>

          <Link to="/user-profile">
            <FaUser className="nav-icon" />
            Profile
          </Link>

          <Link to="/products">
            <FaStore className="nav-icon" />
            Browse Products
          </Link>

          <Link to="/purchase-history">
            <FaShoppingBag className="nav-icon" />
            Purchase History
          </Link>

          <Link to="/rentals">
            <FaTractor className="nav-icon" />
            Rented Items
          </Link>

          <Link to="/subscriptions">
            <FaRedoAlt className="nav-icon" />
            Subscriptions
          </Link>

          <Link to="/receipts">
            <FaFileDownload className="nav-icon" />
            Downloaded Receipts
          </Link>
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
