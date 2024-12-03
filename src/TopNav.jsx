import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Nav.Link
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar expand="lg" style={{
      backgroundColor: 'black', // Set the background color to black
      borderBottom: '2px solid #ffcc00', // Add a yellow border at the bottom
    }}>
      <Container>
        <Navbar.Brand
          style={{
            color: 'white',
            fontWeight: 'bold',
            transition: 'transform 0.3s', // Smooth transition for transform
          }}
        >
          MY PERSONAL INFO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div
            className="me-auto"
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {['Home', 'About', 'Education', 'Hobbies', 'Contact'].map((item) => {
              return (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  style={({ isActive }) => ({
                    color: isActive ? '#ffcc00' : 'white', // Active link styling
                    transition: 'transform 0.3s, color 0.3s', // Smooth transition for transform and color
                    transform: isActive ? 'scale(1.3)' : 'scale(1)', // Scale active link to make it pop-up
                    textDecoration: 'none',
                    margin: '0 15px', // Space between the links
                    padding: '10px 15px', // Padding around the link text
                    fontSize: '18px', // Font size
                    fontFamily: "'Roboto', sans-serif", // Change the font here
                    border: '2px solid', // Add border
                    borderColor: isActive ? '#ffcc00' : 'white', // Border color changes based on active state
                    borderRadius: '5px', // Rounded corners for the box
                    boxSizing: 'border-box', // Ensure padding doesn't affect the overall box size
                  })}
                  onMouseEnter={(e) => {
                    // Only scale up if it's not the active link
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.color = '#ffcc00'; // Highlight color on hover if not active
                      e.target.style.borderColor = '#ffcc00'; // Change border color on hover
                    }
                  }}
                  onMouseLeave={(e) => {
                    // Reset scale, color, and border color if it's not the active link
                    if (!e.target.classList.contains('active')) {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.color = 'white'; // Revert color when not active
                      e.target.style.borderColor = 'white'; // Revert border color
                    }
                  }}
                >
                  {item}
                </NavLink>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
