import React from 'react';
import './app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

import Info from './app/info';

function App() {
  return (
    <Container fluid>
      <Row>
        <Info />
        <Col md={12} lg={8} xl={7} className="right-col">
          <Router>
            <Switch>
              {routes.map(route => {
                return <Route key={route.path} {...route} />;
              })}
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
