import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; //change to react material ui
import logo from '../images/logo.png';
const NavTop = () => {
    return(
        <Navbar className="navBar" collapseOnSelect expand="xl" variant="dark" fixed="top" >
            <Link to="/">
                <Navbar.Brand>
                    <img
                        alt="logo"
                        src={logo}
                        height="40px"
                    />
                    Torrin &amp; Yan
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/timeline">Timeline</Link>
                    <Link className="nav-link" to="/covid19">Covid-19</Link>
                    <Link className="nav-link" to="/faq">FAQ</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );  
  };

  export default NavTop;
