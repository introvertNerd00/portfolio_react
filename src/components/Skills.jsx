import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


function Skills() {
  const skills = [
    { name: 'HTML', proficiency: 90 },
    { name: 'CSS', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Node.js', proficiency: 70 },
    { name: 'Flutter', proficiency: 70 },
    { name: 'Tailwind CSS', proficiency: 75 },
  ];

  return (
    <section id="skills">
      <Container>
        <h2>Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} variant="info" /> 
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
