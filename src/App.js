import React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Resume from 'app/resume';
import Info from 'app/info';
import Blog from 'app/blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Container fluid>
            <Row>
              <Info />
              <Col md={12} lg={8} xl={7} className="right-col">
                <Resume />
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
