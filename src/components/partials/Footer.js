import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <div className="footer">
    <Container>
      <Row>
        <Col sm className="item">
          <h1>We are in social networks</h1>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram-square"></i>
        </Col>
        <Col sm>
          <i className="fa fa-map-marker mr-2"></i>
          Address 
          <br />
          <i className="fa fa-subway mr-2"></i>
          Bus
        </Col>
        <Col sm>
          <i className="fa fa-map-marker mr-2"></i>
          Address 
          <br />
          <i className="fa fa-subway mr-2"></i>
          Bus
        </Col>
        <Col sm>
          <div>
            <h2>Telephone</h2>
          </div>
        </Col>
      </Row>
      <div className="copyright">
        N.A.I.L.S_RUSSIA © 2020
      </div>
    </Container>
  </div>
);

export default Footer;