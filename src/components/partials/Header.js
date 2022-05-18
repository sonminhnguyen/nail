import React from 'react';
import { Col, Row, Container, Navbar, Nav, NavDropdown, ListGroup } from 'react-bootstrap';


const Header = () => (
  <div className="header">
    <Navbar>
      <Navbar.Brand href="/">
          <img src="./images/icons/logo.png" style={{width: 100, height: 75 }} />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#features">feature</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Catalogue" className="catalog">
        <Container >
          <Col>
            <div>
              <h2>Hair</h2>
            </div>
            <div>
              <a href="/">Hair care type</a>
              <a href="/">Hair dye</a>
              <a href="/">Hair accessories</a>
              <a href="/">Hair biowaving</a>
              <a href="/">Tools and equipment</a>
              <a href="/">Beard camouflage paint</a>
              <a href="/">Men's hair cosmetics</a>
              <a href="/">Hair Sets</a>
              <a href="/">Toning masks Newtone</a>
            </div>
          </Col>
          <Col>
            <NavDropdown.Item href="#action/3.2">Face</NavDropdown.Item>
          </Col>
          <Col>
          <NavDropdown.Item href="#action/3.3">Finger</NavDropdown.Item>
          </Col>
          <Col>
          <NavDropdown.Divider />
          </Col>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </Container>
      </NavDropdown>
      </Nav>
      <Nav>
      <Nav.Link href="/contact">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
      {/* <Nav.Link href="/login">Login</Nav.Link> */}
      </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>
);

export default Header;