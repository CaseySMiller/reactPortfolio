import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { MDBRipple, MDBRow, MDBCol } from 'mdb-react-ui-kit';


//define an array of skills
const skillList = [
    'javaScript',
    'HTML',
    'CSS',
    'REACT',
    'Full Stack MERN',
    'SQL',
    'MongoDB',
    'node.JS',
    'GitHub',
    "PWA's",
    'sql',
    'RESTful API',
    'Apollo server',
    'Express server',
    'MVC',
    'Handlebars',
    'jQuery',
    'Bootstrap',
    'Materialize',
    'MD Bootstrap',
    'Heroku',
    'Atlas',
    'Stripe API',
    'GraphQL',
];

const Skills = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center m-3'>
                    <Col md={9}>
                        <div className='shadow p-0 m-0'>
                            <Card className='mb-3 mx-100 hover-shadow'>
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        My Skills
                                    </Card.Title>
                                    <Card.Text>
                                        <ul class="row">
                                            {skillList.map((skill, i) => {
                                                return (
                                                    <li key={i} class="col-lg-6">{skill}</li>
                                                )
                                            })}
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='shadow p-0 m-0'>
                            <Card className='mb-3 mx-100 hover-shadow'>
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        Accreditation
                                    </Card.Title>
                                    <Card.Text>
                                        <MDBRow>
                                            <MDBCol className='text-center'>
                                                <MDBRipple 
                                                rippleTag='a'
                                                target='_blank'
                                                href='https://www.credly.com/badges/09038804-6c29-4c2a-adb1-cfe6a497646f/public_url'
                                                className='rounded-circle hover-zoom justify-content-center'
                                                >
                                                    <img
                                                    src='/images/full-stack-coding-boot-camp.png'
                                                    className='img-fluid'
                                                    alt='DU Coding Bootcamp Badge'
                                                    />
                                                </MDBRipple>
                                            </MDBCol>
                                        </MDBRow>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Skills;