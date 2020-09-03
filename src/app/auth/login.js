import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { request } from 'utils/api/caller';
import * as authHelpers from 'utils/auth';
import config from 'config';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = useCallback(
    function (e) {
      setUsername(e.target.value);
    },
    [setUsername]
  );

  const handleChangePassword = useCallback(
    function (e) {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const login = useCallback(
    function (e) {
      e.preventDefault();
      request({
        method: 'POST',
        to: config.api + '/auth/login',
        data: {
          username,
          password,
        },
      })
        .then(function (res) {
          authHelpers.setAccessToken(res.data.token);
          authHelpers.setAccessTokenExpiresAt(res.data.expires_at);
          history.push('/#/blog');
        })
        .catch(function (err) {
          alert(err.response.data.message);
        });
    },
    [history, password, username]
  );

  return (
    <>
      <Row>
        <Col md={6}>
          <h3 style={{ marginBottom: 20 }}>Login</h3>
          <Form onSubmit={login}>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={handleChangeUsername}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChangePassword}
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
