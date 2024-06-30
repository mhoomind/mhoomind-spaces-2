import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <Container className="mt-5">
      <h2 className="display-5 text-center mb-4">Contact Information</h2>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mb-4 shadow-sm border border-2 border-seoncdary">
            <Card.Body className="text-center">
              <Card.Title className="mb-3">Social Media</Card.Title>
              <Card.Text>
                <Button
                  variant="link"
                  href="https://github.com/mhoomind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark me-3"
                >
                  <i className="fab fa-github fa-2x"></i>
                </Button>
                <Button
                  variant="link"
                  href="https://www.linkedin.com/in/chalumphu-atjarit-036127231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark me-3"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </Button>
                <Button
                  variant="link"
                  href="mailto:mhoomind_@hotmail.com"
                  className="text-dark"
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
          <Card className="mb-4 shadow-sm border border-2 border-seoncdary">
            <Card.Body className="text-center">
              <Card.Title className="mb-3">Phone</Card.Title>
              <Card.Text className="fs-4">
                <i className="fas fa-phone-alt me-2"></i>
                +66 654208338
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
