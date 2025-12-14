import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <h2 className="footer-logo">GreenFarm</h2>
          <p>
            Your trusted partner for fresh agricultural products, seeds,
            grains, and farming equipment.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Rentals</li>
            <li>Today's Prices</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-box">
          <h3>Categories</h3>
          <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Grains</li>
            <li>Seeds</li>
            <li>Equipment</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@greenfarm.com</p>

          <div className="footer-social">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} GreenFarm. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
