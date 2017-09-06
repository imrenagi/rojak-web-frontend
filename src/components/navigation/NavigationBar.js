import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import styles from './navigationbar.css'

export default class NavigationBar extends React.Component {

  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Kawal Media ID</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Kandidat</NavItem>
              <NavItem eventKey={2} href="#">Media</NavItem>
              <NavItem eventKey={3} href="#">About Us</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
