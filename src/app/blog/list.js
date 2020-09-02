import React, { useState, useEffect, useCallback } from 'react';

import { Row, Col } from 'react-bootstrap';
import './list.scss';
import Post from './Post';
import axios from 'axios';

import config from '../../config';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const loadMore = useCallback(
    function () {
      axios
        .get(config.api + '/blog', { params: { cursor: last } })
        .then(function (res) {
          setPosts(p => p.concat(res.data));
          if (res.data.length > 0) {
            setLast(res.data[res.data.length - 1].id);
            setHasMore(true);
          } else {
            setHasMore(false);
          }
        });
    },
    [last]
  );

  useEffect(loadMore, []);

  return (
    <>
      <Row className="blog">
        <Col lg={12} md={6}>
          {posts.map(post => (
            <Post
              id={post.id}
              image={post.image}
              title={post.title}
              time={post.created_at}
              description={post.description}
              author={post.user}
            />
          ))}
          {hasMore ? (
            <a alt="load more blog" onClick={loadMore} href="javascript:">
              Load more...
            </a>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </>
  );
}
