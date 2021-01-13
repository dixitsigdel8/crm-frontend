import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://seeklogo.com/images/B/base-crm-logo-3D922913AC-seeklogo.com.png"
            alt="logo"
            width="50px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Tickets</Nav.Link>
            <Nav.Link href="#features">DashBoard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
