import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#fff',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        height: 'calc(100vh - 1px)', // Fix for potential scrolling
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevents scrolling
      }}
    >
      {/* Image */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src="myPic\\frontfaceko.jpg"
          alt="Romeer John C. Villanueva"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>

      {/* Text Block */}
      <div
        style={{
          padding: '25px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          maxWidth: '450px',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          Hi, I'm <strong>Romeer John C. Villanueva</strong>
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          My current status is <strong>single</strong> — try me!
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
          I never surrender, always fight till I stay alive.
        </p>
      </div>

      {/* Get in Touch Button */}
      <Link
        to="/contact"
        style={{
          marginTop: '20px',
          textDecoration: 'none',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: '600',
          padding: '10px 20px',
          borderRadius: '25px',
          background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        }}
      >
        Get in Touch
      </Link>
    </div>
  );
}

export default Home;
