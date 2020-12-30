import React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from './app/resume';

import Info from './app/info';

function App() {
  return (
    <Container fluid>
      <Row>
        <Info />
        <Col md={12} lg={8} xl={7} className="right-col">
          <Resume/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
