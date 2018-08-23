import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Icon } from 'antd';

export default class Intro extends Component {

  render() {

    const name        = "Huynh Duc Duy";
    const description = "Web Developer";
    const github      = "http://github.com/huynhducduy";
    const linkedin    = "https://www.linkedin.com/in/duc-duy-huynh-617a86152/";
    const facebook    = "http://fb.com/huynhducduy";

    return (
      <div className="intro">
        <div>
          <Avatar size={160} src="https://html5template.website/dyon/old/img/avatar.jpg" />
          <h1 className="name">{ name }</h1>
          <p className="description">{ description }</p>
          <div className="nav">
            <ul>
              <li><Link to="/"><Icon type="profile" /></Link></li>
              <li><Link to="/blog"><Icon type="folder" /></Link></li>
              <li><a href={ github }><Icon type="github" /></a></li>
              <li><a href={ linkedin }><Icon type="linkedin" /></a></li>
              <li><a href={ facebook }><Icon type="facebook" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
