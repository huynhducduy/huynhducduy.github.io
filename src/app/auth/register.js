import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { request } from 'utils/api/caller';
import * as authHelpers from 'utils/auth';
import config from 'config';

const Register = () => {
  const history = useHistory();

  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
  });

  const handleChange = useCallback(
    function (e) {
      setState({ ...state, [e.target.name]: e.target.value });
    },
    [state]
  );

  const register = useCallback(
    function (e) {
      e.preventDefault();
      request({
        method: 'POST',
        to: config.api + '/auth/register',
        data: state,
      })
        .then(function (res) {
          history.push('/auth/login');
        })
        .catch(function (err) {
          alert(err.response.data.message);
        });
    },
    [history, state]
  );

  return (
    <>
      <Row>
        <Col md={6}>
          <h3 style={{ marginBottom: 20 }}>Register</h3>
          <Form onSubmit={register}>
            <Form.Group controlId="username">
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={state.username}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Full name"
                name="name"
                onChange={handleChange}
                value={state.name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={state.email}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={state.password}
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
