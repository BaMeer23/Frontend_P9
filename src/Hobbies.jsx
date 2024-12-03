import React from 'react';

function Hobbies() {
  const hobbies = [
    {
      img: 'myPic\\Chess.jpg',
      title: 'Chess',
      description: 'I enjoy strategy games and critical thinking.',
    },
    {
      img: 'myPic\\C&C.jpg',
      title: 'RTS Games',
      description: 'Generals is my favorite since I was 6.',
    },
    {
      img: 'myPic\\sleeping.jpg',
      title: 'Sleeping',
      description: 'No partner, so always sleeping.',
    },
  ];

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #000, #333)', // Gradient background
        minHeight: '100vh', // Ensures full screen height
        color: '#FFF', // White text for visibility
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '5rem',
          marginBottom: '40px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 'bold',
          color: '#FFF', // White text for better contrast
          textTransform: 'uppercase', // Make the title stand out more
        }}
      >
        My Hobbies
      </h1>

      {/* Hobbies Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px', // Increase space between the cards
          padding: '40px 15px',
        }}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
              backgroundColor: '#FFF', // White card background
              cursor: 'pointer', // Change cursor to pointer on hover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.backgroundColor = '#f4f4f4'; // Light background on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.backgroundColor = '#FFF'; // Return to original color
            }}
          >
            {/* Hobby Image */}
            <img
              src={hobby.img}
              alt={hobby.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '3px',
                borderTopRightRadius: '3px', // Round top corners of the image
                transition: 'transform 0.3s ease',
              }}
            />

            {/* Border to separate the image and text */}
            <div
              style={{
                height: '2px',
                backgroundColor: '#333', // Dark border color
                margin: '15px 0', // Spacing between image and text
              }}
            ></div>

            {/* Hobby Info */}
            <div style={{ padding: '20px', textAlign: 'left' }}>
              <h2
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '10px',
                  color: '#333',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '700',
                  letterSpacing: '1px', // Add some letter spacing for a polished look
                }}
              >
                {hobby.title}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#666',
                  fontFamily: "'Roboto', sans-serif",
                  lineHeight: '1.6',
                  marginBottom: '15px', // Add bottom margin to space out text
                }}
              >
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
