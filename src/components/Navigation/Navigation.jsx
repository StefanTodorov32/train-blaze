import React from 'react'
import {
    Button, Container,
    Nav,
    Navbar,
    Form,
} from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
const Navigation = () => {

    const { isAuthenticated } = useContext(AuthContext)
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container >
                <Navbar.Brand href="/" >TrainBlaze</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <LinkContainer to="/">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/workout-list">
                            <Nav.Link >Traning List</Nav.Link>
                        </LinkContainer>
                        {isAuthenticated && <>
                            <LinkContainer to="/create/workout">
                                <Nav.Link >Create Workout</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/auth/logout">
                                <Nav.Link >Logout</Nav.Link>
                            </LinkContainer>
                            <Nav.Link >Profile</Nav.Link>
                        </>}
                        {!isAuthenticated && <>
                            <LinkContainer to="/auth/login">
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/auth/register">
                                <Nav.Link >Register</Nav.Link>
                            </LinkContainer>
                        </>}
                        asdasd
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="dark">
                        Search
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Navigation