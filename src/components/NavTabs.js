import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavTabs() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-light" to="/">
              <h6 className="m-2">About</h6>
            </NavLink>
            <NavLink className="text-light" to="/portfolio">
              <h6 className="m-2">Portfolio</h6>
            </NavLink>
            <NavLink className="text-light" to="/contact">
              <h6 className="m-2">Contact</h6>
            </NavLink>
            <Nav.Link
              href="https://docs.google.com/document/d/1FgA8RNcyV-B5uYWL0tm5fRTi93I_Qc7WCawcyMGZut0/edit?usp=sharing"
              target="_blank"
            >
              <h6 className="text-primary">Resume</h6>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
