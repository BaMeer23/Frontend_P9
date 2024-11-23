import React from 'react';

function About() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Added background gradient
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '4em',
          fontFamily: "'Poppins', sans-serif", // Modern font for the title
          fontWeight: '700',
          marginBottom: '30px',
          position: 'relative',
          textAlign: 'center',
          color: 'white',
        }}
      >
        About Me
        <span
          style={{
            display: 'block',
            height: '4px',
            width: '80px',
            backgroundColor: '#007BFF', // Blue accent line
            margin: '10px auto 0',
            borderRadius: '2px',
          }}
        ></span>
      </h1>

      {/* Content Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid
          gap: '25px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Individual Info Blocks */}
        {[
          "I am currently pursuing a BS in Computer Science.",
          "My birthday is on June 23.",
          "I can speak Filipino, English, and Bicol.",
          "I have a below-average fitness level.",
          "I have a condition involving weak lungs.",
        ].map((info, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              padding: '20px 15px 30px',
              backgroundColor: '#fff', // White card background
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Accent Bar */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '6px',
                backgroundColor: index % 2 === 0 ? '#007BFF' : '#17A2B8', // Alternating accent colors
              }}
            ></div>

            {/* Info Text */}
            <p
              style={{
                fontSize: '1.2em',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: '500',
                color: '#333',
                textAlign: 'center',
                margin: '0',
              }}
            >
              {info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
