import React, { useState, useEffect, useCallback } from 'react';
import './read.scss';
import { Row, Col, Badge, Button } from 'react-bootstrap';
import config from '../../config';
import formatRelative from 'date-fns/formatRelative';
import fromUnixTime from 'date-fns/fromUnixTime';
import { request } from 'utils/api/caller';
import { useHistory } from 'react-router-dom';

export default function BlogRead({ match }) {
  const history = useHistory();
  const [post, setPost] = useState({});

  const load = useCallback(
    function () {
      request({
        method: 'GET',
        to: config.api + '/blog/' + match.params.id,
      }).then(function (res) {
        setPost(res.data);
      });
    },
    [match.params.id]
  );

  const edit = useCallback(
    function () {
      history.push('/blog/' + match.params.id + '/edit');
    },
    [history, match.params.id]
  );

  const del = useCallback(
    function () {
      request({
        method: 'DELETE',
        to: config.api + '/blog/' + match.params.id,
      }).then(function (res) {
        history.push('/blog');
      });
    },
    [history, match.params.id]
  );

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Row>
      <Col>
        <div className="blog-post">
          <div className="image">
            <img src={post.image} />
          </div>
          <div className="title">{post.title}</div>
          <div className="author">{post.user?.name}</div>
          <div className="time">
            {post.created_at &&
              formatRelative(fromUnixTime(post.created_at), Date.now())}
          </div>
          <div className="description">{post.description}</div>
          <div className="content">{post.content}</div>
          <div className="tags">
            {post.tags &&
              post.tags.split(',').map(tag => (
                <>
                  <a href={'/#/tag/' + tag}>
                    <Badge variant="light">{tag}</Badge>
                  </a>
                  &nbsp;
                </>
              ))}
          </div>
        </div>
        <div style={{ float: 'right' }}>
          <Button onClick={edit}>Edit</Button>&nbsp;
          <Button onClick={del}>Delete</Button>
        </div>
      </Col>
    </Row>
  );
}
