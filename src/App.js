import React from 'react';
import './App.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from './avatar.jpg';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={12} lg={4} xl={5} className="left-col">
          <div>
            <Image
              roundedCircle
              src={avatar}
              alt="avatar"
              width={250}
              className="avatar"
            />
            <h1 className="name">Huynh Duc Duy</h1>
            <h2 className="title">Web Developer</h2>
            <Icon
              path={mdiAccount}
              size={1}
              horizontal
              vertical
              rotate={90}
              color="red"
            />
          </div>
        </Col>
        <Col md={12} lg={8} xl={7} className="right-col">
          <div style={{ height: 2000 }}>ahihi</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
