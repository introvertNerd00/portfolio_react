import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo_black.png'
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar "color='text-white'  bg='dark' sticky="top">
      <Container>
      <Navbar.Brand href="#about"><span><img src={logo} alt="logo" />  </span>Dev Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav  " className='align-items-center'>
        <Nav className="me-auto links">
          <Nav.Link href="#about" className='link'>About</Nav.Link>
          <Nav.Link href="#skills" className='link'>Skills</Nav.Link>
          <Nav.Link href="#projects" className='link'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='link'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default Header