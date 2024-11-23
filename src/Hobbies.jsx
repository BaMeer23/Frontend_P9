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
      description: 'Wala kasi jowa, kaya laging tulog.',
    },
  ];

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Gradient background
        minHeight: '100vh', // Ensures full screen height
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '5rem',
          marginBottom: '30px',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 'bold',
          color: '#FFF', // White text for better contrast
        }}
      >
        My Hobbies
      </h1>

      {/* Hobbies Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              backgroundColor: '#FFF', // White card background
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow =
                '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 6px 12px rgba(0, 0, 0, 0.1)';
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
              }}
            />
            {/* Hobby Info */}
            <div style={{ padding: '15px', textAlign: 'left' }}>
              <h2
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#333',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '700',
                }}
              >
                {hobby.title}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#666',
                  fontFamily: "'Roboto', sans-serif",
                  lineHeight: '1.5',
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
