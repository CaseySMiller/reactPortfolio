import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';



const Home = () => {

    return (
        <>
            <Container className='p-2'>
                <Row className='justify-content-center'>
                    <Col md={9}>
                        <div className='shadow p-0 m-0'>
                            <Card className='mb-3 mx-100 hover-shadow'>
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
                        </div>
                        <Card className='m-2 mx-100 shadow'>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Contact and Links
                                </Card.Title>
                                <Card.Text>
                                    <MDBRow>
                                        <MDBCol lg="4" className='my-1'>
                                            <MDBBtn 
                                            className='d-block my-button'
                                            href="mailto:CaseySMiller@yahoo.com">
                                                Email Me <MDBIcon far icon="envelope" />
                                            </MDBBtn>                                            
                                        </MDBCol>
                                        <MDBCol lg="4" className='my-1'>
                                            <MDBBtn 
                                            className='d-block my-button'
                                            href="https://www.linkedin.com/in/casey-miller-3b376444/"
                                            target='_blank'>
                                                My Linked <MDBIcon fab icon="linkedin" />
                                            </MDBBtn>
                                        </MDBCol>
                                        <MDBCol lg="4" className='my-1'>
                                            <MDBBtn 
                                            className='d-block my-button'
                                            href="https://github.com/CaseySMiller"
                                            target='_blank'>
                                                My GitHub <MDBIcon fab icon="github-square" />
                                            </MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
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
