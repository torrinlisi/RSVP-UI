import React from 'react';
//import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

//tells webpack to use this file, I guess jpg is default accepted
import logo from '../images/logo.png';

const NavTop = () => {
    return(
        <Navbar className="navBar" collapseOnSelect expand="xl" variant="dark" fixed="top" >
            <Navbar.Brand href="/">
                <img
                    alt="logo"
                    src={logo}
                    height="40px"
                />
                Torrin &amp; Yan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/timeline">Timeline</Nav.Link>
                    <Nav.Link href="/covid19">Covid-19</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
                
            
        </Navbar>

    );
  };

  export default NavTop;
