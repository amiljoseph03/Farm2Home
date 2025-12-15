


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './users/pages/dashboard/Dashboard';
import UserProfile from './users/pages/userprofile/UserProfile'

import AdminProfile from './admin/adminprofile/AdminProfile'
import AdminDashboard from './admin/dashboard/AdminDashboard'
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />

        {/* user */}
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
        {/* Admin  */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
