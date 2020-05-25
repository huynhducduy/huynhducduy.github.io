import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import './blog.scss';
import Post from './Post';
import axios from 'axios';

import config from '../../config';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    axios.get(config.api + '/blog', {}).then(function (res) {
      setPosts(res.data);
      if (res.data.length > 0) {
        setLast(res.data[res.data.length - 1].id);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    });
  }, []);

  function loadMore() {
    axios
      .get(config.api + '/blog', { params: { cursor: last } })
      .then(function (res) {
        setPosts(posts.concat(res.data));
        if (res.data.length > 0) {
          setLast(res.data[res.data.length - 1].id);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      });
  }

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
            />
          ))}
          {hasMore ? (
            <a alt="load more blog" onClick={loadMore} href="javascript:">
              Click to load more...
            </a>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </>
  );
}
