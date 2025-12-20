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
        backgroundColor: '#8fb5a0ff', // Farm2Home theme
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <img
        // src="https://i.pinimg.com/originals/aa/c3/63/aac3638ab48538e7546e22cc25efd566.gif"
        // src="https://i.pinimg.com/originals/65/b8/18/65b818eab4285885bced0c703d4540e2.gif"
        // src="https://i.pinimg.com/originals/82/b4/f4/82b4f4b6ad9f626c24a770a5e15d031c.gif"
        src="https://i.pinimg.com/originals/6c/bb/29/6cbb29abac38becfb7e67b453863c0f0.gif"
        style={{
          width: '220px',
          maxWidth: '80%',
        }}
      />
    </div>
  );
}

export default Preloader;

