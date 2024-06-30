import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <Container fluid className="bg-dark p-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className="text-center w-100">
        <h2 className="display-5 mb-4 text-white">Contact Information</h2>

        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Card className="border border-2 border-light shadow-lg rounded p-4" style={{ background: 'linear-gradient(135deg, #ffbf00, #ffa500)' }}>
              <Card.Body>
                <Card.Title className="mb-3 text-white">Social Media</Card.Title>
                <Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/mhoomind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.linkedin.com/in/chalumphu-atjarit-036127231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </Button>
                  <Button
                    variant="link"
                    href="mailto:mhoomind_@hotmail.com"
                    className="text-white"
                  >
                    <i className="fas fa-envelope fa-2x"></i>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border border-2 border-light shadow-lg rounded p-4" style={{ background: 'linear-gradient(135deg, #ffbf00, #ffa500)' }}>
              <Card.Body>
                <Card.Title className="mb-3 text-white">Phone</Card.Title>
                <Card.Text className="fs-4 text-white">
                  <i className="fas fa-phone-alt me-2"></i>
                  +66 654208338
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>

  );
};

export default Contact;
