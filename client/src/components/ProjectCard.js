import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const image = 'shopKeep.png';

function ProjectCard(project) {

    const {
        image,
        title,
        description,
        deployedSite,
        gitHub,
    } = project;

    return (
        <Card className='m-2'>
            <Card.Img variant="top" src={`/images/${image}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Row className='justify-content-center mx-2'>
                    <Button variant="info" className='m-2 col-lg-5' target='_blank' href={deployedSite}>
                        Deployed app
                    </Button>
                    <Button variant="info" className='m-2 col-lg-5' target='_blank' href={gitHub}>
                        GitHub Repo
                    </Button>
                </Row>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;