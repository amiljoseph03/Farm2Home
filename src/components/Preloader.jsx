import React from 'react'

function Preloader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0f1f16', // Farm2Home theme
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <img
        src="https://i.pinimg.com/originals/aa/c3/63/aac3638ab48538e7546e22cc25efd566.gif"
        alt="Loading..."
        style={{
          width: '220px',
          maxWidth: '80%',
        }}
      />
    </div>
  );
}

export default Preloader;

