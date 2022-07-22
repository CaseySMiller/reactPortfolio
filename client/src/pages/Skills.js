import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

//define an array of skills
const skillList = [
    'javaScript',
    'HTML',
    'CSS',
    'REACT',
    'MERN Full stack development',
    'SQL',
    'MongoDB',
    'Apollo Server',
    'RESTful API',
    'node.JS',
    'GitHub'
];

const Skills = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center m-3'>
                    <Col md={9}>
                    <Card className='m-2 mb-3 mx-100'>
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
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Skills;