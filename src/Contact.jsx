import React from 'react';
import { FaFacebook, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div
      style={{
        padding: '80px', // Increased padding for more space
        textAlign: 'center',
        background: 'linear-gradient(180deg, #000, #333)', // Black gradient background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '80px', // Increased padding at the top
        fontFamily: '"Roboto", sans-serif', // Apply Roboto to body text
      }}
    >
      {/* Main Container with Border */}
      <div
        style={{
          border: '2px solid #555',
          padding: '30px', // Increased padding inside the container
          width: '100%',
          maxWidth: '800px', // Made the container slightly wider
          background: '#222', // Dark gray card background
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // More pronounced shadow
          color: '#FFF', // White text for readability
        }}
      >
        <h1
          style={{
            fontSize: '3.9em', // Increased font size
            marginBottom: '8px', // Increased margin for spacing
            fontFamily: '"Poppins", sans-serif', // Apply Poppins to heading
            fontWeight: '700',
          }}
        >
          Contact Me
        </h1>

        <p
          style={{
            fontSize: '1.7em', // Increased font size
            marginBottom: '50px', // Increased margin for spacing
            fontFamily: '"Poppins", sans-serif', // Apply Poppins to subtitle
            color: '#FFF', // Lighter gray for the subtitle
          }}
        >
          Here's how you can reach me!❤️
        </p>

        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li
            style={{
              marginBottom: '20px', // Increased margin for more spacing
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaEnvelope
              style={{
                marginRight: '15px', // Increased spacing between icon and text
                color: '#d93025',
                fontSize: '2em', // Increased icon size
              }}
            />
            <a
              href="mailto:romeerjohnvillanueva062404@gmail.com"
              style={{
                textDecoration: 'none',
                color: '#FFF',
                transition: 'color 0.3s ease', // Smooth color transition
                fontSize: '1.5em', // Increased font size of the email link
              }}
              onMouseEnter={(e) => (e.target.style.color = '#d93025')}
              onMouseLeave={(e) => (e.target.style.color = '#FFF')}
            >
              romeerjohnvillanueva062404@gmail.com
            </a>
          </li>

          <li
            style={{
              marginBottom: '20px', // Increased margin for more spacing
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaPhone
              style={{
                marginRight: '15px', // Increased spacing between icon and text
                color: '#34a853',
                fontSize: '2em', // Increased icon size
              }}
            />
            <a
              href="tel:09070538026"
              style={{
                textDecoration: 'none',
                color: '#FFF',
                transition: 'color 0.3s ease',
                fontSize: '1.5em', // Increased font size of the phone link
              }}
              onMouseEnter={(e) => (e.target.style.color = '#34a853')}
              onMouseLeave={(e) => (e.target.style.color = '#FFF')}
            >
              09070538026
            </a>
          </li>

          <li
            style={{
              marginBottom: '20px', // Increased margin for more spacing
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaFacebook
              style={{
                marginRight: '15px', // Increased spacing between icon and text
                color: '#1877F2',
                fontSize: '2em', // Increased icon size
              }}
            />
            <a
              href="https://www.facebook.com/profile.php?id=100090649299983"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#FFF',
                transition: 'color 0.3s ease',
                fontSize: '1.5em', // Increased font size of the Facebook link
              }}
              onMouseEnter={(e) => (e.target.style.color = '#1877F2')}
              onMouseLeave={(e) => (e.target.style.color = '#FFF')}
            >
              Romeer John Villanueva
            </a>
          </li>

          <li
            style={{
              marginBottom: '20px', // Increased margin for more spacing
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaGithub
              style={{
                marginRight: '15px', // Increased spacing between icon and text
                color: '#FFF',
                fontSize: '2em', // Increased icon size
              }}
            />
            <a
              href="https://github.com/BaMeer23"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#FFF',
                transition: 'color 0.3s ease',
                fontSize: '1.5em', // Increased font size of the Github link
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ccc')}
              onMouseLeave={(e) => (e.target.style.color = '#FFF')}
            >
              BaMeer23
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
