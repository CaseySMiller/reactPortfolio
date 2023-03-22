import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';


const placeholderImage = '/images/image-placeholder.jpg';

function ProjectCardSmall(project) {

    const {
        image,
        title,
        deployedSite,
    } = project;

    return (
        <div className='h-100 shadow p-0 m-0'>
            <a href={deployedSite} className='small-project-title' target="_blank">
                <MDBCard className='h-100 hover-shadow'>
                    <MDBCardBody style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div className='text-center'>
                            <MDBCardTitle >{title}</MDBCardTitle>
                        </div>
                    {image ? (
                        <MDBCardImage className='rounded' src={`/images/${image}`} />
                        ) : (
                        <MDBCardImage className='rounded' src={placeholderImage} />
                    )}
                    </MDBCardBody>
                </MDBCard>
            </a>
        </div>
    )
};

export default ProjectCardSmall;