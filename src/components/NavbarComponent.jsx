import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="home"> <strong>Abunawas</strong>Resto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default NavbarComponent;
