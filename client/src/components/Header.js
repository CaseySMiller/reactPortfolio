import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';


const Header = () => {

    return (
        <>
            <Container>
                    <Navbar className='mt-0 p-2 my-nav shadow' variant="dark" expand="md">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                alt="profile pic"
                                src="/images/profilePic.jfif"
                                width="100"
                                className="d-inline-block align-bottom profile-pic"
                                />{' '}
                                Casey Miller's Portfolio
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/skills">Skills</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Container>
        </>
    );
};

export default Header;
