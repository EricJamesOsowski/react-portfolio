import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';


function NavbarComponent() {
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Eric Osowski</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent