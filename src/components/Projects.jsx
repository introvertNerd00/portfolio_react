import React from 'react';
import { Button,Container, Row, Col, Card } from 'react-bootstrap';
import project1Image from '../assets/project_univent.jpeg';
import project2Image from '../assets/node-code.jpg';
import project3Image from '../assets/python-code.jpg';


function Projects() {
  const projects = [
    {
      name: 'Univents App',
      image: project1Image,
      description: 'A mobile Application developed in  Flutter for event managment in universities arranged by different Societies and clubs',
      link:'https://github.com/introvertNerd00/univentApp'
    },
    {
      name: 'Ecommerce store API',
      image: project2Image,
      description: 'An API project for the ecommerce store done with Nodejs, Expressjs using real world practices  ',
      link:'https://github.com/introvertNerd00/store_api_hosted'
    },
    {
      name: 'Parking space detection App',
      image: project3Image,
      description: 'An Digital Image Processing project written in python with OPENCV, pickle, Numpy and CVZONE .',
      link:'https://github.com/introvertNerd00/parking-space-detection'
    },
   
  ];

  return (
    <section id="projects">
      <Container>
        <h2>Projects</h2>
        <Row className="justify-content-center"> 
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className='project-card'>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" className='button-bt' href={project.link}>Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
