import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './read.scss';
import { Row, Col, Badge } from 'react-bootstrap';
import config from '../../config';
import formatRelative from 'date-fns/formatRelative';
import fromUnixTime from 'date-fns/fromUnixTime';

export default function BlogRead({ match }) {
  const [post, setPost] = useState({});

  const load = useCallback(
    function () {
      axios.get(config.api + '/blog/' + match.params.id).then(function (res) {
        setPost(res.data);
      });
    },
    [match.params.id]
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
      </Col>
    </Row>
  );
}
