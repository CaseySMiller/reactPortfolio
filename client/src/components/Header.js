import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';


const Header = () => {

    return (
        <>
            <Container>
                    <Navbar className='mt-0 p-2 my-nav shadow' variant="dark" expand="md">
                        <Container>
                            <Navbar.Brand href="/" className='row'>
                                        <img
                                        alt="profile pic"
                                        src="/images/profilePic.jfif"
                                        width="100"
                                        className="d-inline-block align-bottom profile-pic col-md-3"
                                        />
                                        <span className='col-md-9 text-wrap'>
                                            Casey Miller's Portfolio
                                        </span>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        </div>
                                    </div>
                                    <div className='col-md-9'>
                                    </div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/skills">Skills</Nav.Link>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/resume">Resume</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Container>
        </>
    );
};

export default Header;
