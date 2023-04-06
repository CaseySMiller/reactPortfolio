import React from 'react';
import { MDBRipple, MDBCard, MDBCardTitle, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';


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
                        <MDBRipple className='hover-zoom'>
                            {image ? (
                                <MDBCardImage className='rounded img-fluid' src={`/images/${image}`} />
                                ) : (
                                <MDBCardImage className='rounded img-fluid' src={placeholderImage} />
                            )}
                        </MDBRipple>
                    </MDBCardBody>
                </MDBCard>
            </a>
        </div>
    )
};

export default ProjectCardSmall;