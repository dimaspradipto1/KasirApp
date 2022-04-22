import React, { Component } from "react";
import { Col, Navbar, Container, Nav } from "react-bootstrap";

export default class NavbarComponent extends Component {
  render() {
    return (
      <Col>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <strong>Kasir App</strong>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Col>
    );
  }
}
