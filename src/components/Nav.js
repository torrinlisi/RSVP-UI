import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; //change to react material ui
import logo from '../images/logo.png';
const NavTop = () => {
    const [expanded, setExpanded] = useState(false);
    return(
        <Navbar className="navBar" expanded={expanded} expand="xl" variant="dark" fixed="top" >
            <Link to="/" onClick={() => setExpanded(false)}>
                <Navbar.Brand>
                    <img
                        alt="logo"
                        src={logo}
                        height="40px"
                    />
                    Torrin &amp; Yan
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded? false: "expanded")} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/about" onClick={() => setExpanded(false)}>About</Link>
                    <Link className="nav-link" to="/timeline" onClick={() => setExpanded(false)}>Timeline</Link>
                    <Link className="nav-link" to="/covid19" onClick={() => setExpanded(false)}>Covid-19</Link>
                    <Link className="nav-link" to="/faq" onClick={() => setExpanded(false)}>FAQ</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );  
  };

  export default NavTop;
