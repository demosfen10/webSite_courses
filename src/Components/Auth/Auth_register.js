import React, {useState} from 'react';
import { Nav, Navbar, Button, NavLink, Container, Modal, Form } from 'react-bootstrap';
import { Link, /*NavLink*/ } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-brand, .navbar-nar, .nav-link{
    color: #adb1b8;
    &:hover {
        color: white
    }
}
`

function Auth_register(){

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
                                <Nav.Link>  <Link to="/about">About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant="primary" className="mr-2 mb-2" onClick={handleShow}>Log In</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            
<Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter ur name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="password" placeholder="Enter ur surname" />
                        </Form.Group>
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
                    </Form>
                </Modal.Body>
            </Modal>
            </>
)}
            export default Auth_register;