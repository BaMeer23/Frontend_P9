import React from 'react';


function Education() {
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
          fontSize: '3em',
          marginBottom: '20px',
          color: '#FFF', // White text for visibility
          fontWeight: 'bold',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Education: From Elementary to College
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '1.2em',
          color: '#FFF', // Subtle white for the description
          marginBottom: '40px',
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        A glimpse into my academic journey.
      </p>

      {/* Grid Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          padding: '0 20px',
        }}
      >
        {/* Education Cards */}
        {[
          {
            img: 'myPic\\Planza.jpg',
            title: 'Planza San Fernando Elementary School',
          },
          {
            img: 'myPic\\Pamukid.png',
            title: 'Pamukid San Fernando High School',
          },
          {
            img: 'myPic\\Sanfernando.jpg',
            title: 'San Fernando High School (Senior High)',
          },
          {
            img: 'myPic\\NCF.jpg',
            title: 'Naga College Foundation, Inc.',
          },
        ].map((school, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#FFF', // White cards for contrast
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              borderTop: `6px solid ${
                index % 2 === 0 ? '#6a11cb' : '#2575fc'
              }`, // Alternating gradient colors as accent
              transition: 'transform 0.3s, box-shadow 0.3s',
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
            {/* School Image */}
            <img
              src={school.img}
              alt={school.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            {/* School Info */}
            <div style={{ padding: '15px', backgroundColor: '#f7f7f7' }}>
              <p
                style={{
                  fontSize: '1.1em',
                  color: '#333',
                  margin: '0',
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: '500',
                }}
              >
                {school.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
