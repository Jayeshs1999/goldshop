import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>MaharashtrachyaKushit.in &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
