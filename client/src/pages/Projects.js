import React from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const projectList = [
    {
        _id: 'project-1',
        image: 'shopKeep.png',
        title: 'The Melted cone',
        description: 'This is a full stack MERN eCommerce web-app for selling ice cream. This was a group project completed on 7/20/2022',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-2',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-3',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-4',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-5',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-6',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },
    {
        _id: 'project-7',
        image: 'shopKeep.png',
        title: 'ShopKeep',
        description: 'This is the shopkeep app',
        deployedSite: 'https://the-melted-cone.herokuapp.com/',
        gitHub: 'https://github.com/CaseySMiller/theMeltedCone',
    },

]

const Projects = () => {

    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <ProjectCard 
                            key={projectList[0]._id}
                            image={projectList[0].image}
                            title={projectList[0].title}
                            description={projectList[0].description}
                            deployedSite={projectList[0].deployedSite}
                            gitHub={projectList[0].gitHub}
                        >
                        </ProjectCard>
                    </Col>
                    <Col md={6}>
                        <ProjectCard 
                            key={projectList[1]._id}
                            image={projectList[1].image}
                            title={projectList[1].title}
                            description={projectList[1].description}
                            deployedSite={projectList[1].deployedSite}
                            gitHub={projectList[1].gitHub}
                        >
                        </ProjectCard>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col md={4}>
                        <ProjectCard 
                            key={projectList[2]._id}
                            image={projectList[2].image}
                            title={projectList[2].title}
                            description={projectList[2].description}
                            deployedSite={projectList[2].deployedSite}
                            gitHub={projectList[2].gitHub}
                        >
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard 
                            key={projectList[3]._id}
                            image={projectList[3].image}
                            title={projectList[3].title}
                            description={projectList[3].description}
                            deployedSite={projectList[3].deployedSite}
                            gitHub={projectList[3].gitHub}
                        >
                        </ProjectCard>
                    </Col>
                    <Col md={4}>
                        <ProjectCard 
                            key={projectList[4]._id}
                            image={projectList[4].image}
                            title={projectList[4].title}
                            description={projectList[4].description}
                            deployedSite={projectList[4].deployedSite}
                            gitHub={projectList[4].gitHub}
                        >
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Projects;
