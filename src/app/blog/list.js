import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import './blog.scss';
import Post from './Post';

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <>
      <Row className="blog">
        <Col lg={12} md={6}>
          <Post
            id={1}
            image="https://picsum.photos/200/300?random=1"
            title="Neque porro quisquam est qui..."
            time={1590378674}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            felis in augue placerat congue."
          />
        </Col>
      </Row>
    </>
  );
}
