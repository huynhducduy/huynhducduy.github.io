import React, { useState, useEffect, useCallback } from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import './list.scss';
import Post from './Post';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import isAuthenticated from 'utils/auth/isAuthenticated';
import clearAuth from 'utils/auth/clearAuth';

import config from '../../config';

export default function BlogList() {
  const history = useHistory();
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
      <Row>
        <Col>
          {isAuthenticated() ? (
            <>
              <div style={{ float: 'right', marginBottom: 20 }}>
                <Button
                  onClick={() => {
                    clearAuth();
                    history.go(0);
                  }}
                >
                  Logout
                </Button>
                &nbsp;
                <Button>Write</Button>
              </div>
            </>
          ) : (
            <>
              <div style={{ float: 'right', marginBottom: 20 }}>
                <Link to="/auth/login">
                  <Button>Login</Button>
                </Link>
                &nbsp;
                <Link to="/auth/register">
                  <Button>Register</Button>
                </Link>
              </div>
            </>
          )}
        </Col>
      </Row>
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
            'No more blog...'
          )}
        </Col>
      </Row>
    </>
  );
}
