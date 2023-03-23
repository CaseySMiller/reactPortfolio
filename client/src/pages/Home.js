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
                                                About Me
                                            </MDBCardTitle>
                                            <MDBCardText className='text-center'>
                                            I am an aspiring developer and a recent graduate of a full stack bootcamp through the <a href="https://bootcamp.du.edu/coding/" target="_blank" rel="noreferrer">University of Denver</a>. I bring a creative, can-do attitude to every project I take on.
                                            <br/>
                                            I am still learning but I have built web front ends as a hobby for decades. Throughout my training I have gained a strong foundation in building a full stack application in Javascript using current good practice and modern techniques.
                                            <br/>
                                            I have encountered many challenges during my education but I loved every minute of it. I thrive in a fast paced, challenging environment and I look forward to all of the new things I will learn as a Junior Developer.
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
                        <MDBRow className='text-center'>
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
