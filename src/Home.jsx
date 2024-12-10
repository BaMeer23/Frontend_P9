import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const leftDivStyle = {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
    marginLeft: '50px',
    alignSelf: 'start', // Align to the top of the grid
  };

  const rightDivStyle = {
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
    marginRight: '50px',
    alignSelf: 'start', // Align to the top of the grid
  };

  return (
    <div
      style={{
        color: '#fff',
        padding: '30px 10px',
        background: 'linear-gradient(180deg, #2b2b2b, #1a1a1a)',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        gap: '20px',
        justifyItems: 'center',
      }}
    >
      {/* Left Bar */}
      <div style={leftDivStyle}>
        <h3
          style={{
            color: '#fff',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          Left Sidebar
        </h3>
        <p style={{ fontSize: '0.9rem', textAlign: 'justify', lineHeight: '1.5' }}>
          This is the left container. You can add navigation links, recent updates,
          or other content here. Make it dynamic or static depending on your
          requirement.
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto auto', // Separate rows for image and text
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '700px',
          width: '100%',
          textAlign: 'justify',
        }}
      >
        {/* Image Block */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <img
            src="myPic\\Gigaface.jpg"
            alt="Romeer John C. Villanueva"
            style={{
              width: '70%',
              height: 'auto',
              borderRadius: '4px',
              border: '20px solid rgba(255, 255, 255, 0.3)',
            }}
          />
        </div>

        {/* Text Content */}
        <div
          style={{
            padding: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
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
            I never surrender, always fight till I stay alive. Passionate about
            technology and creativity, I strive to leave a positive impact wherever I
            go.
          </p>
          <p
            style={{
              fontSize: '1rem',
              marginBottom: '16px',
              fontFamily: 'Arial, sans-serif',
              color: '#fff',
            }}
          >
            As a low-class student with a passion for web development, I am focused on
            becoming a frontend developer. I first focused on learning JavaScript and
            will soon be expanding my knowledge to HTML and CSS. Even though I don't
            have many resources, I am determined to keep learning, experimenting, and
            improving every day to build modern, responsive websites and create a
            brighter future for myself and others.
          </p>
          <NavLink
            to="/contact"
            style={{
              textDecoration: 'none',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: '700',
              padding: '12px 26px',
              borderRadius: '25px',
              background: 'linear-gradient(90deg, #2575fc, #6a11cb)',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Get in Touch
          </NavLink>
        </div>
      </div>

      {/* Right Bar */}
      <div style={rightDivStyle}>
        <h3
          style={{
            color: '#fff',
            marginBottom: '20px',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          Right Sidebar
        </h3>
        <p style={{ fontSize: '0.9rem', textAlign: 'justify', lineHeight: '1.5' }}>
          This is the right container. You can add additional features, links, or
          any supplementary content here.
        </p>
      </div>
    </div>
  );
}

export default Home;
