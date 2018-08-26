import React, { PureComponent } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

class ListItemBlog extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    id: 1,
    title: "This is a blog",
    image: "https://wordup411ng.com/wp-content/uploads/2015/12/untitled318.jpg",
    time: "Never been posted",
    description:
      "With no content, an image found on google search, some text to make it real."
  };

  render() {
    const { id, title, image, time, description } = this.props;

    return (
      <Link to={`/blog/${id}`}>
        <Card className="blog-item" cover={<img alt={title} src={image} />}>
          <p className="time">
            <Moment format="hh:mm A, MMM Do YYYY">{time}</Moment>
          </p>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </Card>
      </Link>
    );
  }
}

export default ListItemBlog;
