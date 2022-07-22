import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';


const Home = () => {

    return (
        <>
            <Container className='p-2'>
                <Row className='justify-content-center'>
                    <Col md={9}>
                        <Card className='m-2 mb-3 mx-100 shadow'>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    About Me
                                </Card.Title>
                                <Card.Text className='text-center'>
                                I am an aspiring developer and a recent graduate of a full stack bootcamp through the <a href="https://bootcamp.du.edu/coding/" target="_blank" rel="noreferrer">University of Denver</a>. I bring a creative, can-do attitude to every project I take on.
                                <br/>
                                I am still learning but I have built web front ends as a hobby for decades. Throughout my training I have gained a strong foundation in building a full stack application in Javascript using current good practice and modern techniques.
                                <br/>
                                I have encountered many challenges during my education but I loved every minute of it. I thrive in a fast paced, challenging environment and I look forward to all of the new things I will learn as a Junior Developer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='m-2 mx-100 shadow'>
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
                                                    <img className='contact-link' id="emailLogo" src="/images/emailLogo.png" alt="Linkedin logo"></img>
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
                                                    <img id="liLogo" className='contact-link' src="/images/LI-Logo.png" alt="Linkedin logo"></img>
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
                                                    <img id="gitLogo" className='contact-link' src="/images/GitHub_Logo.png"></img>
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
