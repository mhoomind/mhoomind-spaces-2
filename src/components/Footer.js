import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} Chalumphu Atjarit. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;