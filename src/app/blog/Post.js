import React from 'react';

import { Row, Col } from 'react-bootstrap';
import formatRelative from 'date-fns/formatRelative';
import fromUnixTime from 'date-fns/fromUnixTime';

import routeToUrl from 'utils/router/routeToUrl';

export default React.memo(function ({
  id = 0,
  image,
  title,
  time = 0,
  description,
  author = {},
}) {
  if (!Number.isInteger(time)) time = 0;

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
          <h2 className="title">
            <a href={'#' + routeToUrl('blog-read', { id })}>{title}</a>
          </h2>
          <p className="description">{description}</p>
          <div>
            <a href="" className="author">
              {author.name}
            </a>
            <br />
            <span className="time">
              {formatRelative(fromUnixTime(time), Date.now())}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
});
