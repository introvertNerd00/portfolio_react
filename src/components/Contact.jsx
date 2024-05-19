import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faXTwitter} from '@fortawesome/free-brands-svg-icons'; // Or your preferred icons


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); 
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
              </Form.Group>

              <Button variant="primary" type="submit" className='button-btn'>
                Submit
              </Button>
            </Form>

            <div className="social-icons">
              <a href="https://github.com/introvertNerd00" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/hamzaafzall" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/Hamzaaa_Here" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
