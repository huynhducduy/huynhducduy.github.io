import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import './blog.scss';
import Post from './Post';
import axios from 'axios';

import config from '../../config';

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(config.api + '/blog', {}).then(function (res) {
      setPosts(res.data);
    });
  }, []);

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
        </Col>
      </Row>
    </>
  );
}
