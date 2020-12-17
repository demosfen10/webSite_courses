import React, { useState } from 'react';
import { Nav, Navbar, Button, NavLink, Container, Modal, Form } from 'react-bootstrap';
import { Link, /*NavLink*/ } from 'react-router-dom';
import styled from 'styled-components';
//import Auth_register from './Auth/Auth_register';



const Styles = styled.div`
a, .navbar-brand, .navbar-nar, .nav-link{
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`


function Navibar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>WebDev Blog</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto ml-3">
                                <Nav.Link>  <Link to="/" className="mr-2 mt-2">Home</Link> </Nav.Link>
                                <Nav.Link>  <Link to="/users">Users</Link></Nav.Link>
                                <Nav.Link>  <Link to="/table">TableAddRemove</Link></Nav.Link>
                                <Nav.Link>  <Link to="/about">About</Link></Nav.Link>
                                <Nav.Link>  <Link to="/contacts">Contacts</Link></Nav.Link>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown link
        </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="vk.com">Action</a>
                                        <a class="dropdown-item" href="facebook.com">Another action</a>
                                        <a class="dropdown-item" href="google.com">Something else here</a>
                                    </div>
                                </li>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2 mb-2" onClick={handleShow}>Log In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted"> We'll never share your email with anyone</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Form.Group controlId="formBasicSwitch">
                            <Link to="/register">Forgot a password</Link>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default Navibar;