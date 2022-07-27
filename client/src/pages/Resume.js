import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const Resume = () => {
    const resumeFile = "/assets/Casey_Miller_Resume.pdf";

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    };

    return (
        <>
            <Container>
                <Row className='justify-content-center my-3'>
                    <Col xl={9} lg={11}>
                    <Card className='m-2 mb-3 mx-100 shadow'>
                            <Card.Body className='text-center'>
                                <Card.Title className="text-center mb-3">
                                    My Resume
                                </Card.Title>
                                <div className="d-flex justify-content-center mb-3">
                                    <div className='overflow-auto'>
                                        <Document file="/assets/Casey_Miller_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                                            <Page pageNumber={pageNumber} />
                                        </Document>
                                    </div>
                                </div>
                                <Button 
                                variant="secondary" 
                                className='m-2 col-xs-10 my-button'
                                target='_blank' 
                                href={resumeFile}>
                                    Download .pdf
                                </Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Resume;