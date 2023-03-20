import React from 'react'
import {
    Button, Container,
    Nav,
    Navbar,
    Form,
    NavDropdown,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const Navigation = () => {
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
                        <LinkContainer to="/training-list">
                            <Nav.Link >Traning List</Nav.Link>
                        </LinkContainer>                        
                        <LinkContainer to="/create/program">
                            <Nav.Link >Create Program</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="light">
                        Search
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Navigation