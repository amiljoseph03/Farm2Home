import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Search here..." style={styles.input} />
      <button style={styles.button}>
        <FaSearch style={styles.icon} />
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto',
    display: 'flex',
    alignItems: 'center',
    background: '#e8f5e9',
    borderRadius: '40px',
    padding: '8px 14px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    boxSizing: 'border-box', 
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    background: 'transparent',
    color: '#2e7d32',
    padding: '10px',
    height: '42px',
  },
 button: {
  background: "#2e7d32",
  border: "none",
  outline: "none",
  width: "42px",
  height: "42px",
  minWidth: "42px",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}
,
  icon: {
    color: '#0f0d0dff', 
    fontSize: '18px', 
  },
};

export default SearchBar;
