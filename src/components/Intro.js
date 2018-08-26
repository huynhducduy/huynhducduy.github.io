import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Icon, Tooltip } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import avatar from "../images/avatar.jpg";

class Intro extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    facebook: PropTypes.string
  };

  render() {
    const { name, description, github, linkedin, facebook } = this.props.intro;

    return (
      <div className="intro">
        <div>
          <Avatar size={220} src={avatar} />
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <div className="nav">
            <ul>
              <li>
                <Tooltip placement="top" title="Resume">
                  <Link to="/">
                    <Icon type="solution" />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="Blog">
                  <Link to="/blogs">
                    <Icon type="copy" />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="Github">
                  <a href={github} target="_blank">
                    <Icon type="github" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="LinkedIn">
                  <a href={linkedin} target="_blank">
                    <Icon type="linkedin" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="top" title="Facebook">
                  <a href={facebook} target="_blank">
                    <Icon type="facebook" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Intro);
