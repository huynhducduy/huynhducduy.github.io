import React, { Component } from "react";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class BlogItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    id: 1,
    title: "Something",
    image: "asdasd",
    time: "123123",
    description: "34123123"
  };

  render() {
    const { id, title, image, time, description } = this.props;

    return (
      <Link to={`/blog/${id}`}>
        <Card className="blog-item" cover={<img alt={title} src={image} />}>
          <p className="time">{time}</p>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </Card>
      </Link>
    );
  }
}

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="blog">
          <BlogItem
            id="1"
            image="https://mrhmt.com/assets/img/react-ultimate.jpg"
            title="Ultimate React Develop 3 in 1"
            time="2018, Aug 13  —  6 minute read"
            description="Recently, in the SWD course at my university, the final project was to create a..."
          />
          <Pagination className="pagination" defaultCurrent={1} total={50} />
        </div>
      </div>
    );
  }
}

export default Blog;
