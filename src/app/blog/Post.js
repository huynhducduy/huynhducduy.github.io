import React from 'react';

import { Row, Col } from 'react-bootstrap';
import formatRelative from 'date-fns/formatRelative';
import fromUnixTime from 'date-fns/fromUnixTime';

export default function Post({ id, image, title, time, description }) {
  return (
    <div className="post">
      <Row>
        <Col
          lg={4}
          md={12}
          xs={5}
          className="thumbnail"
          style={{
            backgroundImage: "url('" + image + "')",
          }}
        ></Col>
        <Col className="content">
          <h2 class="title">
            <a href="#">{title}</a>
          </h2>
          <span class="time">
            {formatRelative(fromUnixTime(time), Date.now())}
          </span>
          <p class="description">{description}</p>
        </Col>
      </Row>
    </div>
  );
}
