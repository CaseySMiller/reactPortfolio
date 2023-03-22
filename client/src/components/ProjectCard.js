import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';


const placeholderImage = '/images/image-placeholder.jpg';

function ProjectMDBCard(project) {

    const {
        image,
        title,
        description,
        deployedSite,
        gitHub,
        largeCol
    } = project;

    return (

        <div className='h-100 shadow p-0 m-0'>
            <MDBCard className='h-100 hover-shadow'>
                {image ? (
                    <MDBCardImage variant="top" src={`/images/${image}`} />
                    ) : (
                    <MDBCardImage variant="top" src={placeholderImage} />
                )}
                <MDBCardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <MDBCardText>
                            {description}
                        </MDBCardText>
                    </div>
                    <div style={{marginTop: '12px'}}>
                        <MDBRow className='justify-content-center mx-2'>
                            <MDBBtn 
                            variant="secondary" 
                            className={largeCol ? 'm-2 col-xs-10 col-lg-5 my-button' : 'm-2 col-xs-10 my-button'}
                            target='_blank' 
                            href={deployedSite}>
                                Deployed app
                            </MDBBtn>
                            <MDBBtn 
                            variant="secondary" 
                            className={largeCol ? 'm-2 col-xs-10 col-lg-5 my-button' : 'm-2 col-xs-10 my-button'}
                            target='_blank' 
                            href={gitHub}>
                                GitHub Repo
                            </MDBBtn>
                        </MDBRow>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
};

export default ProjectMDBCard;