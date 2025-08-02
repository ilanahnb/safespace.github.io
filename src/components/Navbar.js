import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#1c1c1c' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: '#eaeaea', display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/logo.png"
                        alt="Safe Space Logo"
                        style={{ height: '30px', marginRight: '10px' }}
                    />
                    Safe Space
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" style={{ color: '#eaeaea' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/privacy" style={{ color: '#eaeaea' }}>Privacy</Nav.Link>
                        <Nav.Link as={Link} to="/support" style={{ color: '#eaeaea' }}>Support</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={{ color: '#eaeaea' }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
