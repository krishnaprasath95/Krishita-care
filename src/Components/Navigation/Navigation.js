import React from 'react';
import './Navigation.css';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
 const Navigation = () => {
    return (
        <div>
  <Navbar collapseOnSelect className="colorNav" expand="lg" fixed="top">
  <NavLink to="/">Logo</NavLink>
  <Navbar.Toggle className="customToggle" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
  <NavLink to="/about">About</NavLink>
  <NavLink to="/treatment">Treatments</NavLink>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
</div>
)
}

export default Navigation;