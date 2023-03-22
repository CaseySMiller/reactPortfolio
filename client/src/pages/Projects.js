import React from 'react';
import { MDBContainer, MDBCol, MDBRow, } from 'mdb-react-ui-kit';

import ProjectCard from '../components/ProjectCard';
import projectList from '../components/data/projectList';

const Projects = () => {

    return (
        <>
            <MDBContainer>
                <MDBRow className='text-center mt-4'>
                    <h2>Projects</h2>
                </MDBRow>
                <MDBRow className='justify-content-center align-items-stretch'>
                    <MDBCol md={6} className='my-2'>
                        <ProjectCard 
                            key={projectList[0]._id}
                            image={projectList[0].image}
                            title={projectList[0].title}
                            description={projectList[0].description}
                            deployedSite={projectList[0].deployedSite}
                            gitHub={projectList[0].gitHub}
                            largeCol={true}
                        >
                        </ProjectCard>
                    </MDBCol>
                    <MDBCol md={6} className='my-2'>
                        <ProjectCard 
                            key={projectList[1]._id}
                            image={projectList[1].image}
                            title={projectList[1].title}
                            description={projectList[1].description}
                            deployedSite={projectList[1].deployedSite}
                            gitHub={projectList[1].gitHub}
                            largeCol={true}
                        >
                        </ProjectCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='justify-content-center'>
                    <MDBCol md={4} className='my-2'>
                        <ProjectCard 
                            key={projectList[2]._id}
                            image={projectList[2].image}
                            title={projectList[2].title}
                            description={projectList[2].description}
                            deployedSite={projectList[2].deployedSite}
                            gitHub={projectList[2].gitHub}
                        >
                        </ProjectCard>
                    </MDBCol>
                    <MDBCol md={4} className='my-2'>
                        <ProjectCard 
                            key={projectList[3]._id}
                            image={projectList[3].image}
                            title={projectList[3].title}
                            description={projectList[3].description}
                            deployedSite={projectList[3].deployedSite}
                            gitHub={projectList[3].gitHub}
                        >
                        </ProjectCard>
                    </MDBCol>
                    <MDBCol md={4} className='my-2'>
                        <ProjectCard 
                            key={projectList[4]._id}
                            image={projectList[4].image}
                            title={projectList[4].title}
                            description={projectList[4].description}
                            deployedSite={projectList[4].deployedSite}
                            gitHub={projectList[4].gitHub}
                        >
                        </ProjectCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Projects;
