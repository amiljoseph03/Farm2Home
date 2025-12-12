import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Search here..." style={styles.input} />
      <button style={styles.button}>
        <FaSearch />
      </button>
    <div>
        
    </div>
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
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    background: 'transparent',
    color: '#2e7d32',
  },
  button: {
    background: '#2e7d32', 
    border: 'none',
    outline: 'none',
    padding: '10px 14px',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SearchBar;
