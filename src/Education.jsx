import React from 'react';

function Education() {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #000, #333)', // Black gradient
        minHeight: '100vh', // Ensures full screen height
        color: '#FFF',
        display: 'flex', // Use flexbox
        flexDirection: 'column', // Align items vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      }}
    >
      {/* Title Section */}
      <h1
        style={{
          fontSize: '3.5em',
          marginBottom: '20px',
          color: '#FFF', // White text for visibility
          fontWeight: 'bold',
          fontFamily: '"Roboto", sans-serif', // Modern sans-serif font
        }}
      >
        Education: From Elementary to College
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '1.5em',
          color: '#FFF', // Subtle white for the description
          marginBottom: '40px',
          fontFamily: '"Lora", serif', // Serif font for a more scholarly feel
        }}
      >
        A glimpse into my academic journey
      </p>

      {/* Image Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // Two columns per row
          gap: '60px', // Space between the images
          padding: '60px 0px',
          width: '90%', // Adjust width as per your design
 
        }}
      >
        {/* Image Cards */}
        {[
          {
            img: 'myPic/Planza.jpg',
            title: 'Planza San Fernando Elementary School',
          },
          {
            img: 'myPic/Pamukid.png',
            title: 'Pamukid San Fernando High School',
          },
          {
            img: 'myPic/Sanfernando.jpg',
            title: 'San Fernando High School (Senior High)',
          },
          {
            img: 'myPic/NCF.jpg',
            title: 'Naga College Foundation, Inc.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#000', // Black card background
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
            }}
          >
            {/* Image Section */}
            <div
              style={{
                backgroundColor: '#000', // Match black theme
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: 'auto',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* Title Section */}
            <div
              style={{
                padding: '15px',
                backgroundColor: '#FFF', // White background for text
                color: '#000', // Black text for contrast
                textAlign: 'center',
                borderTop: '2px solid #000', // Add a black border on top of the text box
              }}
            >
              <p
                style={{
                  fontSize: '1.1em',
                  margin: '0',
                  fontFamily: '"Lora", serif', // Using serif font to match subtitle feel
                  fontWeight: '500',
                }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
