import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <div className="left-col">1 of 2</div>
        <div className="right-col">
          <div style={{ height: 2000 }}>ahihi</div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
