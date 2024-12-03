import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        color: '#fff',
        padding: '30px 10px',
        background: 'linear-gradient(180deg, #2b2b2b, #1a1a1a)',
        minHeight: '100vh',
        display: 'grid', // Use grid layout
        gridTemplateColumns: '1fr 1fr', // Split into 2 equal columns
        gridTemplateRows: 'auto', // Adjust rows based on content
        gap: '20px', // Add space between columns
        justifyItems: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
      }}
    >
      {/* Text Block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: '#fff',
          maxWidth: '700px',
          padding: '30px  ',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(8px)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'justify', // Justify the text
          marginBottom: '25px',
          marginLeft: '20px',
        }}
      >
        <h1
          style={{
            fontSize: '1.4rem',
            marginBottom: '20px',
          }}
        >
          Hello, I'm <strong>Romeer John C. Villanueva</strong>
        </h1>
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '14px',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
          }}
        >
          I never surrender, always fight till I stay alive. Passionate about technology and creativity, I strive to leave a positive impact wherever I go.
        </p>
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '16px',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
          }}
        >
              As a low-class student with a passion for web development, I am focused on becoming a frontend developer. I first focused on learning JavaScript and will soon be expanding my knowledge to HTML and CSS. Even though I don't have many resources, I am determined to keep learning, experimenting, and improving every day to build modern, responsive websites and create a brighter future for myself and others.
        </p>
        {/* Get in Touch Button */}
        <NavLink
          to="/contact"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: '700',
            padding: '12px 26px',
            borderRadius: '25px',
            background: 'linear-gradient(90deg, #2575fc, #6a11cb)', // Gradient blue for the button
            boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            marginTop: '10px',
            marginLeft: '-2px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.3)';
          }}
        >
          Get in Touch
        </NavLink>
      </div>

      {/* Image Block */}
      <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '510px',
    borderRadius: '10px', // Rounded corners
    border: '20px solid rgba(255, 255, 255, -100)', // Classic solid border
    boxShadow: '0 20px 40px rgba(0, 0, 0, 100)', // 3D shadow effect
    marginBottom: '30px',
    marginLeft: '30px'
  }}
>
  <img
    src="myPic\\Gigaface.jpg"
    alt="Romeer John C. Villanueva"
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: '2px', // Rounded corners on the image
      
    }}
  />
    </div>
    </div>
  );
}

export default Home;
