import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Testing Site</Navbar.Brand>
          <Nav.Link className="ml-auto" href="/account">
            Logged in as: {'tesuser'}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/branch">Branch</Nav.Link>
              <Nav.Link href="/colleges">Colleges</Nav.Link>
              <Nav.Link href="/companies">Companies</Nav.Link>
              <Nav.Link href="/students">Student</Nav.Link>
              <Nav.Link href="/my/jobs">My Jobs</Nav.Link>
              <Nav.Link href="/data">Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
