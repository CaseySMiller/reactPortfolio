import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const placeholderImage = '/images/image-placeholder.jpg';

function ProjectCard(project) {

    const {
        image,
        title,
        description,
        deployedSite,
        gitHub,
        largeCol
    } = project;

    return (
        <Card className='h-100 shadow'>
            {image ? (
                <Card.Img variant="top" src={`/images/${image}`} />
                ) : (
                <Card.Img variant="top" src={placeholderImage} />
            )}
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </div>
                <div style={{marginTop: '12px'}}>
                    <Row className='justify-content-center mx-2'>
                        <Button 
                        variant="secondary" 
                        className={largeCol ? 'm-2 col-xs-10 col-lg-5 my-button' : 'm-2 col-xs-10 my-button'}
                        target='_blank' 
                        href={deployedSite}>
                            Deployed app
                        </Button>
                        <Button 
                        variant="secondary" 
                        className={largeCol ? 'm-2 col-xs-10 col-lg-5 my-button' : 'm-2 col-xs-10 my-button'}
                        target='_blank' 
                        href={gitHub}>
                            GitHub Repo
                        </Button>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;