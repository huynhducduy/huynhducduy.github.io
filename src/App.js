import React from 'react';
import './App.scss';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import avatar from './avatar.jpg';
import Icon from '@mdi/react';
import { mdiFile, mdiPost, mdiGithub, mdiLinkedin, mdiFacebook } from '@mdi/js';

function App() {
  return (
    <Container fluid>
      <Row>
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
        <Col md={12} lg={8} xl={7} className="right-col">
          <div>
            <h1># Information</h1>
            <p>
              Full name:&nbsp;<b>Huynh Duc Duy</b>
            </p>
            {/* <p>
              Day of birth:&nbsp;<b>January 2nd, 1999</b>
            </p> */}
            <p>
              Phone number:&nbsp;<b>(+84) 339 228 306</b>
            </p>
            <p>
              LinkedIn:&nbsp;<b>linkedin.com/in/huynhducduy/</b>
            </p>
            <p>
              Email:&nbsp;<b>huynhducduy219@gmail.com</b>
            </p>
            <p>
              Skype:&nbsp;<b>live:duuuuuuuuy</b>
            </p>
            <p>
              Address:&nbsp;<b>Binh Thanh District, HCMC</b>
            </p>
          </div>
          <div>
            <h1># About</h1>
            <p>
              A web developer with 2 years of experience in programming,
              especially in web development. With knowledge of Web Design,
              UI/UX, Clean Code, Data Structure & Algorithm, Networking, Maths.
              Familiar with UNIX/Linux environment.
            </p>
            <p>
              Proficient in: Javascript/NodeJS/React, PHP/Laravel, HTML/CSS,
              SQL, C++
              <br />
              Skilled and experienced in Java, C#/.Net, Arduino (Embedded
              System)
              <br />
              Familiar with: RESTful API, Service Worker, Docker, Jenkins,...
            </p>
            <p>
              Have a strong passion in coding and learning things, I can easily
              acquire new knowledge, and spending most of the spare time
              self-study with online resources, courses, articles (99% of my
              knowledge come from the internet).
            </p>
            <p>
              Can withstand high pressure with high self-consciousness and
              patience to. I'm also a good team-player.
            </p>
          </div>
          <div>
            <h1># Skills</h1>
            <h5 className="skill-set">Front-End</h5>
            <p>
              <Badge variant="light">html5</Badge>
              &nbsp;
              <Badge variant="light">css3</Badge>
              &nbsp;
              <Badge variant="light">js/jQuery</Badge>
              &nbsp;
              <Badge variant="light">bootstrap</Badge>
              &nbsp;
              <Badge variant="light">sass</Badge>
              &nbsp;
              <Badge variant="light">react</Badge>
              &nbsp;
              <Badge variant="light">react-native</Badge>
            </p>
            <h5 className="skill-set">Back-End</h5>
            <p>
              <Badge variant="light">golang</Badge>
              &nbsp;
              <Badge variant="light">php/laravel</Badge>
              &nbsp;
              <Badge variant="light">nodejs</Badge>
              &nbsp;
              <Badge variant="light">python</Badge>
              &nbsp;
              <Badge variant="light">restfulAPI</Badge>
              &nbsp;
            </p>
            <h5 className="skill-set">Others</h5>
            <p>
              <Badge variant="light">git</Badge>
              &nbsp;
              <Badge variant="light">firebase</Badge>
              &nbsp;
              <Badge variant="light">c++</Badge>
              &nbsp;
              <Badge variant="light">unix/linux</Badge>
              &nbsp;
              <Badge variant="light">sql</Badge>
              &nbsp;
              <Badge variant="light">mongodb</Badge>
              &nbsp;
              <Badge variant="light">cloud services</Badge>
              &nbsp;
              <Badge variant="light">hardware/arduino</Badge>
            </p>
          </div>
          <div>
            <h1># Work Experience</h1>
            <ul class="timeline">
              <li>
                <span>Data Scientist Intern @&nbsp;</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.knorex.com/"
                >
                  Knorex
                </a>
                <div class="float-right">Sep 2019 - Feb 2020</div>
                <p>
                  Working with Ads CTR (Click-Through Rate) Predictor
                  <br />
                  - Benchmark model with public datasets
                  <br />
                  - Re-procedure SotA model
                  <br />
                  - Tuning production model, apply experiment
                  <br />
                  - Analyze time-series CTR data, feature engineering...
                  <br />
                  Addition: Build a log monitor system consist of text classify,
                  information extraction,...
                  <br />
                  <br />
                  Team-size: 10+
                </p>
              </li>
              <li>
                <span>Front-End Engineer @&nbsp;</span>
                <a
                  href="https://www.weventure.global/"
                  rel="noopener noreferrer"
                >
                  WeVenture
                </a>
                <div class="float-right">Aug 2018 - May 2019</div>
                <p>
                  Develop and migrate front-end services for various products,
                  mostly video services and managements.
                  <br />
                  Focus on performance, security and maintainability to building
                  app that scales.
                  <br />
                  <br />
                  Using ES6 + React.js/Vue.js to build single-page web apps with
                  server-side rendering via NodeJS.
                  <br />
                  Building code base with specific coding convention,
                  tech-stack; maintaining, re-building/migrating legacy app.
                  <br />
                  <br />
                  Stack: Go + gRPC, Ruby, MySQL, Redis, Node.js, React + Redux,
                  Webpack + Babel, Vue.js, Docker + Kubernates, Git, Jenkins,
                  Consul, RabbitMQ, Kafka, Kibana/ElasticSearch, Google Cloud
                  Platform
                  <br />
                  <br />
                  Team size: 10+
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1># Volunteer Experience</h1>
          </div>
          <div>
            <h1># Education</h1>
          </div>
          <div>
            <h1># Certifications</h1>
          </div>
          <div>
            <h1># Accomplishments</h1>
          </div>
          <div>
            <h1># Projects</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
