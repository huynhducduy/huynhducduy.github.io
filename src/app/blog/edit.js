import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { request } from 'utils/api/caller';
import config from 'config';

const BlogEdit = ({ match }) => {
  const history = useHistory();

  const [state, setState] = useState({
    title: '',
    description: '',
    slug: '',
    image: '',
    content: '',
    tags: '',
  });

  const load = useCallback(
    function () {
      request({
        method: 'GET',
        to: config.api + '/blog/' + match.params.id,
      }).then(function (res) {
        setState(res.data);
      });
    },
    [match.params.id]
  );

  const handleChange = useCallback(
    function (e) {
      setState({ ...state, [e.target.name]: e.target.value });
    },
    [state]
  );

  const edit = useCallback(
    function (e) {
      e.preventDefault();
      request({
        method: 'PUT',
        to: config.api + '/blog/' + match.params.id,
        data: state,
      })
        .then(function (res) {
          history.push('/blog/' + match.params.id);
        })
        .catch(function (err) {
          alert(err.response.data.message);
        });
    },
    [history, match.params.id, state]
  );

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Row>
        <Col md={12}>
          <h3 style={{ marginBottom: 20 }}>Edit Blog</h3>
          <Form onSubmit={edit}>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={state.title}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control
                as="textarea"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={state.description}
              />
            </Form.Group>
            <Form.Group controlId="slug">
              <Form.Control
                type="text"
                placeholder="Slug"
                name="slug"
                onChange={handleChange}
                value={state.slug}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Control
                type="text"
                placeholder="Image"
                name="image"
                onChange={handleChange}
                value={state.image}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Control
                as="textarea"
                placeholder="Content"
                name="Content"
                onChange={handleChange}
                value={state.content}
              />
            </Form.Group>
            <Form.Group controlId="tags">
              <Form.Control
                type="text"
                placeholder="Tags"
                name="tags"
                onChange={handleChange}
                value={state.tags}
              />
            </Form.Group>
            <Form.Group controlId="submit">
              <Button variant="primary" type="submit">
                Save
              </Button>
              &nbsp;
              <Button onClick={() => history.push('/blog/' + match.params.id)}>
                Back
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default BlogEdit;
