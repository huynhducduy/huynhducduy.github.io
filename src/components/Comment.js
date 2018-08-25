import React, { Component } from "react";
import { Avatar } from "antd";
import PropTypes from "prop-types";

export default class Comment extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string
  };

  static defaultProps = {
    avatar: "sdfasdf",
    name: "sdfasdf",
    time: "sdsfsasfsf",
    content: "sdfadfasdf"
  };

  render() {
    const { avatar, name, time, content } = this.props;

    return (
      <li>
        <div className="comment-avatar">
          <Avatar size={65} src={avatar} />
        </div>
        <div className="comment-content">
          <span className="comment-meta">
            <span className="username">{name}</span>
            &nbsp;on&nbsp;
            {time}
          </span>
          <p>{content}</p>
        </div>
      </li>
    );
  }
}
