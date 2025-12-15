import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartPie,
  FaUserShield,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaTractor,
  FaRedoAlt,
  FaCalendarDay,
  FaMoneyBillWave,
  FaBell,
  FaSignOutAlt,
} from 'react-icons/fa';

import './AdminDashboard.css';

const stats = [
  { title: 'Total Users', value: 124 },
  { title: 'Daily Orders', value: 18 },
  { title: 'Active Subscriptions', value: 42 },
  { title: 'Active Rentals', value: 7 },
];

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
   
      <aside className="admin-sidebar">
        <h1>Farm2Home Admin</h1>

        <nav>
          <Link to="/admin/dashboard" className="active">
            <FaChartPie /> Dashboard
          </Link>

          <Link to="/admin/profile">
            <FaUserShield /> Admin Profile
          </Link>

          <Link to="/admin/users">
            <FaUsers /> Users
          </Link>

          <Link to="/admin/products">
            <FaBoxOpen /> Products
          </Link>

          <Link to="/admin/orders">
            <FaShoppingCart /> Orders
          </Link>

          <Link to="/admin/rentals">
            <FaTractor /> Rentals
          </Link>

          <Link to="/admin/subscriptions">
            <FaRedoAlt /> Subscriptions
          </Link>

          <Link to="/admin/reports">
            <FaCalendarDay /> Daily Reports
          </Link>

          <Link to="/admin/payments">
            <FaMoneyBillWave /> Payments
          </Link>

          <Link to="/admin/notifications">
            <FaBell /> Notifications
          </Link>

          <Link to="/logout" className="logout">
            <FaSignOutAlt /> Logout
          </Link>
        </nav>
      </aside>

    
      <main className="admin-main">
      
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <p>Overview of platform activity</p>
        </div>


        <div className="admin-stats">
          {stats.map((item, index) => (
            <div className="admin-stat-card" key={index}>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

    
        <div className="admin-sections">
          <div className="admin-card">
            <h4>Daily Report</h4>
            <p>₹25,000 revenue today</p>
          </div>

          <div className="admin-card">
            <h4>Recent Rentals</h4>
            <p>Tractor, Power Tiller, Harvester</p>
          </div>

          <div className="admin-card">
            <h4>New Users</h4>
            <p>6 users joined today</p>
          </div>

          <div className="admin-card">
            <h4>Subscription Alerts</h4>
            <p>3 subscriptions expiring</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
