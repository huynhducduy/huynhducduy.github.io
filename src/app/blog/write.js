import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { request } from 'utils/api/caller';
import config from 'config';

const BlogWrite = () => {
  const history = useHistory();

  const [state, setState] = useState({
    title: '',
    description: '',
    slug: '',
    image: '',
    content: '',
    tags: '',
  });

  const handleChange = useCallback(
    function (e) {
      setState({ ...state, [e.target.name]: e.target.value });
    },
    [state]
  );

  const write = useCallback(
    function (e) {
      e.preventDefault();
      request({
        method: 'POST',
        to: config.api + '/blog',
        data: state,
      })
        .then(function (res) {
          history.push('/blog/' + res.data.id);
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
        <Col md={12}>
          <h3 style={{ marginBottom: 20 }}>Write Blog</h3>
          <Form onSubmit={write}>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="slug">
              <Form.Control
                type="text"
                placeholder="Slug"
                name="slug"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Control
                type="text"
                placeholder="Image"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Control
                as="textarea"
                placeholder="Content"
                name="Content"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="tags">
              <Form.Control
                type="text"
                placeholder="Tags"
                name="tags"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit">
                Write
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default BlogWrite;
