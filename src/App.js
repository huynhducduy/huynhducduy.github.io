import React from 'react';
import './App.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from './avatar.jpg';
import Icon from '@mdi/react';
import { mdiFile, mdiPost, mdiGithub, mdiLinkedin, mdiFacebook } from '@mdi/js';

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
            <div className="icons">
              <div className="icon-block">
                <div>
                  <Icon path={mdiFile} size={2} />
                </div>
                <span>Resume</span>
              </div>
              <div className="icon-block">
                <div>
                  <Icon path={mdiPost} size={2} />
                </div>
                <span>Blog</span>
              </div>
              <div className="icon-block">
                <div>
                  <Icon path={mdiGithub} size={2} />
                </div>
                <span>Github</span>
              </div>
              <div className="icon-block">
                <div>
                  <Icon path={mdiLinkedin} size={2} />
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="icon-block">
                <div>
                  <Icon path={mdiFacebook} size={2} />
                </div>
                <span>Facebook</span>
              </div>
            </div>
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
