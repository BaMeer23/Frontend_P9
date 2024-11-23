import React from 'react';
import { FaFacebook, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Aligns content to the top
        alignItems: 'center', // Centers horizontally
        paddingTop: '50px', // Adds space from the top
      }}
    >
      {/* Main Heading */}
      <h1
        style={{
          fontSize: '4em', // Increased size for emphasis
          marginBottom: '20px',
          fontFamily: '"Poppins", "Roboto", sans-serif', // Enhanced font stack
          fontWeight: '900', // Extra bold
          letterSpacing: '2px', // Letter spacing for aesthetics
          background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Contact Me
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontSize: '1.5em',
          marginBottom: '30px',
          color: '#fff',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '300',
          letterSpacing: '1px',
        }}
      >
        Here's how you can get in my heart ❤️
      </p>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {/* Email */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaEnvelope
            style={{
              marginRight: '10px',
              color: '#d93025',
              fontSize: '1.5em',
            }}
          />
          <a
            href="mailto:romeerjohnvillanueva062404@gmail.com"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            romeerjohnvillanueva062404@gmail.com
          </a>
        </li>

        {/* Phone */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaPhone
            style={{
              marginRight: '10px',
              color: '#34a853',
              fontSize: '1.5em',
            }}
          />
          <a
            href="tel:09070538026"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            09070538026
          </a>
        </li>

        {/* Facebook */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaFacebook
            style={{
              marginRight: '10px',
              color: '#1877F2',
              fontSize: '1.5em',
            }}
          />
          <a
            href="https://www.facebook.com/profile.php?id=100090649299983"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            Romeer John Villanueva
          </a>
        </li>

        {/* GitHub */}
        <li
          style={{
            marginBottom: '20px',
            fontSize: '1.2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaGithub
            style={{
              marginRight: '10px',
              color: '#fff',
              fontSize: '1.5em',
            }}
          />
          <a
            href="https://github.com/BaMeer23"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            BaMeer23
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
