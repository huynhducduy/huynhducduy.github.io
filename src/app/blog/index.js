import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Blog = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Duy's Blog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="/">Home</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Blog;
