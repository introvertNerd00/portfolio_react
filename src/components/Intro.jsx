import React from 'react';
import { Button,Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/profile/pic.jpg';
import pdfCV from '../assets/CV_hamza.pdf';


function Introduction() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = pdfCV;
    link.download = 'Hamza_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section id="about">
      <Container>
        <Row className="justify-content-center"> 
          <Col xs={12} md={4} className="text-center mb-3"> 
            <Image src={profileImage} roundedCircle className="profile-image" />
          </Col>
          <Col xs={12} md={8} className="intro-text text-center mt-4">
            <h2>Hi, I'm Hamza Afzal</h2>
            <p>
              A passionate developer with expertise in React, HTML, CSS, JavaScript and Flutter. 
              I love building beautiful and user-friendly Web and Mobile Apps.
            </p>
          </Col>
          <Col xs={12} className="text-center"> 
            <Button variant="primary" onClick={handleDownloadCV} className='mb-4 '>
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Introduction;
