import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Icon } from "antd";
import PropTypes from "prop-types";

export default class Intro extends Component {
  static defaultProps = {
    name: "Huynh Duc Duy",
    description: "Web Developer",
    github: "http://github.com/huynhducduy",
    linkedin: "https://www.linkedin.com/in/duc-duy-huynh-617a86152/",
    facebook: "http://fb.com/huynhducduy"
  };

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    facebook: PropTypes.string
  };

  render() {
    const { name, description, github, linkedin, facebook } = this.props;

    return (
      <div className="intro">
        <div>
          <Avatar
            size={160}
            src="https://html5template.website/dyon/old/img/avatar.jpg"
          />
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <div className="nav">
            <ul>
              <li>
                <Link to="/">
                  <Icon type="profile" />
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <Icon type="folder" />
                </Link>
              </li>
              <li>
                <a href={github}>
                  <Icon type="github" />
                </a>
              </li>
              <li>
                <a href={linkedin}>
                  <Icon type="linkedin" />
                </a>
              </li>
              <li>
                <a href={facebook}>
                  <Icon type="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
