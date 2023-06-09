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
    const { isAuthenticated, userEmail } = useContext(AuthContext)

    return (
        <Navbar style={{ background: "linear-gradient(90deg, rgba(8,0,136,1) 0%, rgba(73,73,255,1) 38%, rgba(0,181,218,1) 100%)" }} expand="lg" variant='dark'>
            <Container >
                <LinkContainer to="/">
                    <Navbar.Brand>TrainBlaze</Navbar.Brand>
                </LinkContainer>
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
                            <LinkContainer to="/profile">
                                <Nav.Link >Profile: {userEmail}</Nav.Link>
                            </LinkContainer>
                        </>}
                        {!isAuthenticated && <>
                            <LinkContainer to="/auth/login">
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/auth/register">
                                <Nav.Link >Register</Nav.Link>
                            </LinkContainer>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation