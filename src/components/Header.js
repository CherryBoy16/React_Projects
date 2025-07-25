import React from 'react';
import { Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Education</Nav.Link>
        </Nav>
        <Form className="d-flex ms-auto">
          <FormControl type="search" placeholder="Search" className="me-2" />
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
