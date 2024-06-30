import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hanni.jpg';

const heroSectionStyle = {
  position: 'relative',
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 'calc(100vh - 55px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust overlay opacity here (0.5 is 50% opacity)
};

const contentStyle = {
  position: 'relative', // Ensure content stays above overlay
  color: '#fff',
};

const buttonStyle = {
  minWidth: '150px',
  fontSize: '1rem',
};

function Home() {
  return (
    <div className="hero-section" style={heroSectionStyle}>
      <div style={overlayStyle}></div> {/* Overlay for background image */}
      <Container style={contentStyle}>
        <h2 className="display-5 fw-medium">
          Welcome to Mhoomind Space
        </h2>
        <p>
          <Button as={Link} to="/about" variant="outline-warning" className="me-2 btn-lg" style={buttonStyle}>
            About me
          </Button>
          <Button as={Link} to="/contact" variant="outline-warning" className="btn-lg" style={buttonStyle}>
            Contact
          </Button>
        </p>
      </Container>
    </div>
  );
}

export default Home;
