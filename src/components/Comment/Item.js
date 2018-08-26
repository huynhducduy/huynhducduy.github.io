import React, { Component } from "react";
import { Avatar } from "antd";
import PropTypes from "prop-types";
import md5 from "md5";
import Moment from "react-moment";

export default class CommentItem extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string
  };

  static defaultProps = {
    avatar: "https://html5template.website/dyon/img/comment/avatar01.jpg",
    name: "Jean Pietro",
    time: "August 20",
    content:
      "Morbi ut faucibus nulla, at fringilla est. Morbi lacinia sagittis purus."
  };

  render() {
    const { name, time, content, email } = this.props;

    return (
      <li>
        <div className="comment-avatar">
          <Avatar
            size={65}
            src={`https://www.gravatar.com/avatar/${md5(email)}`}
          />
        </div>
        <div className="comment-content">
          <span className="comment-meta">
            <span className="username">{name}</span>
            &nbsp;on&nbsp;
            <Moment format="hh:mm A, MMM Do YYYY">{time}</Moment>
          </span>
          <p>{content}</p>
        </div>
      </li>
    );
  }
}
