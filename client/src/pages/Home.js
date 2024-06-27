import React from 'react';
import { MDBBtn, MDBIcon, MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody } from 'mdb-react-ui-kit';

import ProjectCardSmall from '../components/ProjectCardSmall';
import projectList from '../components/data/projectList';

const Home = () => {

    return (
        <>
            <MDBContainer className='p-2'>
                <MDBRow>
                    <MDBCol className='col-12 order-lg-2'>
                        <MDBRow  className='justify-content-center' >
                            <MDBCol md={9}>
                                <div className='shadow p-0 m-0' id="about-me">
                                    <MDBCard className='mb-3 mx-100 hover-shadow'>
                                        <MDBCardBody>
                                            <MDBCardTitle className="text-center">
                                                Welcome to my portfolio!
                                            </MDBCardTitle>
                                            <MDBCardText className='text-center'>
                                            Are you looking for a passionate and skilled web developer to join your team? You've come to the right place.
                                            <br/>
                                            As a tech educator and freelance web developer, I've honed my expertise in both communication and building top-notch web applications. My current focus is on crafting efficient and scalable solutions using the MERN stack and Jamstack technologies.
                                            <br/>
                                            I thrive in all things JavaScript and I'm constantly exploring new opportunities to learn and grow. Currently, I'm enhancing my TypeScript skills and diving into the world of Python. My dedication to continuous improvement ensures I stay at the forefront of web development trends.
                                            <br/>
                                            I'm eager to bring my hard work, self-motivation, and collaborative spirit to a full-time role where I can contribute to a larger codebase and team environment. If you're searching for a developer who combines technical expertise with a passion for learning, let's connect and discuss how I can add value to your projects.
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </div>
                                <MDBCard className='m-2 mx-100 shadow'>
                                    <MDBCardBody>
                                        <MDBCardTitle className="text-center">
                                            Contact and Links
                                        </MDBCardTitle>
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
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className='col-12 order-lg-1'>
                        <MDBRow className='text-center light-title'>
                            <h5>Top Projects</h5>
                        </MDBRow>
                        <MDBRow  className='justify-content-around mb-3' >
                            <MDBCol md={9} lg={4} className='my-2 px-4'>
                                <ProjectCardSmall 
                                    key={projectList[0]._id}
                                    image={projectList[0].image}
                                    title={projectList[0].title}
                                    deployedSite={projectList[0].deployedSite}
                                >
                                </ProjectCardSmall>
                            </MDBCol>
                            <MDBCol md={9} lg={4} className='my-2 px-4'>
                                <ProjectCardSmall 
                                    key={projectList[1]._id}
                                    image={projectList[1].image}
                                    title={projectList[1].title}
                                    deployedSite={projectList[1].deployedSite}
                                >
                                </ProjectCardSmall>
                            </MDBCol>
                        <   MDBCol md={9} lg={4} className='my-2 px-4'>
                                <ProjectCardSmall 
                                    key={projectList[2]._id}
                                    image={projectList[2].image}
                                    title={projectList[2].title}
                                    deployedSite={projectList[2].deployedSite}
                                >
                                </ProjectCardSmall>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
};

export default Home;
