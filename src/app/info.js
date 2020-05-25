import React from 'react';
import avatar from '../assets/avatar.jpg';
import Icon from '@mdi/react';
import { Col, Image } from 'react-bootstrap';
import { mdiFile, mdiPost, mdiGithub, mdiLinkedin, mdiFacebook } from '@mdi/js';

export default function Info() {
  return (
    <Col md={12} lg={4} xl={5} className="left-col">
      <div>
        <Image
          roundedCircle
          src={avatar}
          alt="avatar"
          width={250}
          className="avatar"
        />
        <h1 className="name">Huynh Duc Duy</h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://huynhducduy.me"
        >
          <div className="website">huynhducduy.me</div>
        </a>
        <h2 className="title">Web Developer</h2>
        <div className="icons">
          <a rel="noopener noreferrer" href="/#/" className="black">
            <div className="icon-block">
              <div>
                <Icon path={mdiFile} size={2} />
              </div>
              <span>Resume</span>
            </div>
          </a>
          <a rel="noopener noreferrer" href="/#/blog" className="black">
            <div className="icon-block">
              <div>
                <Icon path={mdiPost} size={2} />
              </div>
              <span>Blog</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/huynhducduy/"
            className="black"
          >
            <div className="icon-block">
              <div>
                <Icon path={mdiLinkedin} size={2} />
              </div>
              <span>LinkedIn</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/huynhducduy"
            className="black"
          >
            <div className="icon-block">
              <div>
                <Icon path={mdiGithub} size={2} />
              </div>
              <span>Github</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fb.com/huynhducduy"
            className="black"
          >
            <div className="icon-block">
              <div>
                <Icon path={mdiFacebook} size={2} />
              </div>
              <span>Facebook</span>
            </div>
          </a>
        </div>
      </div>
    </Col>
  );
}
