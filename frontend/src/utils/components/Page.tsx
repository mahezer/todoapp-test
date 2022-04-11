import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';

import { Link } from 'react-router-dom';

const Page = (props: any) => {
  const { children } = props;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bolttech TODO App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <ToastContainer />
    </>

  )

}

export default Page;