import { useState } from 'react';
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Farm2Home</h1>

        <div className="navbar-menu">
          {['Home', 'Prices Today', 'Contact'].map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}

          <div
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button>Categories ▾</button>

            {dropdown && (
              <div className="dropdown-menu">
                {['Vegetables', 'Fruits', 'Grains', 'Equipment'].map((item) => (
                  <a key={item} href="#">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button className="login-btn">Login</button>
        </div>

        <button className="mobile-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {['Home', 'Categories', 'Prices Today', 'Contact'].map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}

          {/* <button className="login-btn">Login</button> */}
          <button className="login-btn">
            <Link to="../..//login">Login</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
