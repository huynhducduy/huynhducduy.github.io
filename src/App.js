import React from 'react';
import './app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRouter from 'utils/router/privateRouter';
import PublicRouter from 'utils/router/publicRouter';
import ProtectedRouter from 'utils/router/protectedRouter';

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
                if (route.access_level === 'private') {
                  return <PrivateRouter key={route.path} {...route} />;
                }

                if (route.access_level === 'public') {
                  return <PublicRouter key={route.path} {...route} />;
                }

                if (route.access_level === 'protected') {
                  return <ProtectedRouter key={route.path} {...route} />;
                }

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
