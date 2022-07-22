import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';


const Home = () => {

    return (
        <>
            <Container className='p-2'>
                <Row className='justify-content-center'>
                    <Col md={9}>
                        <Card className='m-2 mb-3 mx-100'>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    About Me
                                </Card.Title>
                                <Card.Text>
                                I am an aspiring developer currently attending a full stack bootcamp through the <a href="https://bootcamp.du.edu/coding/" target="_blank" rel="noreferrer">University of Denver</a>. I bring a creative, can-do attitude to every project I take on.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-2 mx-100'>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Contact and Links
                                </Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col className='center-all'>
                                            <a href="mailto:CaseySMiller@yahoo.com"
                                            >
                                                <Row className='center-all'>
                                                    Email Me
                                                </Row>
                                                <Row className='center-all'>
                                                <img id="emailLogo" src="/images/emailLogo.png" alt="Linkedin logo"></img>
                                                </Row>
                                            </a>
                                        </Col>
                                        <Col className='center-all'>
                                            <a 
                                            href="https://www.linkedin.com/in/casey-miller-3b376444/"
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                                <Row className='center-all'>
                                                    My LinkdIn
                                                </Row>
                                                <Row className='center-all'>
                                                <img id="liLogo" src="/images/LI-Logo.png" alt="Linkedin logo"></img>
                                                </Row>
                                            </a>
                                        </Col>
                                        <Col className='center-all'>
                                            <a 
                                            href="https://github.com/CaseySMiller"
                                            target="_blank"
                                            rel="noreferrer"
                                            >
                                                <Row className='center-all'>
                                                    My GitHub
                                                </Row>
                                                <Row className='center-all'>
                                                <img id="gitLogo" src="/images/GitHub_Logo.png"></img>
                                                </Row>
                                            </a>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
