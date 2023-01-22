import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png';

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand href="#home" className="logo">
                            <img src={Logo} alt="Aspire Clinic (custom-made) logo" />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>

                            <Nav className="me-auto">

                                <NavDropdown title="Home" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.3">
                                        News & Events
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.3">
                                        Appointments
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.3">
                                        Doctors & Staff
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.3">
                                        Billing and Insurance
                                    </NavDropdown.Item>

                                </NavDropdown>

                                <NavDropdown title="Health Information" id="basic-nav-dropdown">

                                    <NavDropdown.Item href="#action/3.1">
                                        Care & Services
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.2">
                                        Diseases & Conditions A-Z
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.3">
                                        Symptoms A-Z
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.4">
                                        Medical Professionals
                                    </NavDropdown.Item>

                                    <NavDropdown.Item href="#action/3.5">
                                        Locations
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.6">
                                        FAQ
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#link">Contact Us</Nav.Link>
                                <Nav.Link href="#link">Donate</Nav.Link>
                            </Nav>

                            <button className="portal">Patient Portal</button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
