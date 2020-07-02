import React from 'react';
import Icon from '@mdi/react';
import { Badge } from 'react-bootstrap';
import { mdiFileDownload } from '@mdi/js';

export default function Resume() {
  return (
    <>
      <a
        href="https://drive.google.com/open?id=1LxxZNtwre4JNhug3PIdICRPtxMaKJ7SM"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="save-btn">
          <Icon path={mdiFileDownload} size={2} />
        </div>
      </a>
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
          A web developer with experience in programming, especially in web
          development, have knowledge in Web Design, UI/UX, Clean Code, Data
          Structure & Algorithm, Networking, Maths. Familiar with UNIX/Linux
          environment.
        </p>
        <p>
          Have a strong passion in coding and learning things, I can easily
          acquire new knowledge, and spending most of the spare time self-study
          with online resources, courses, articles (99% of my knowledge come
          from the internet).
        </p>
        <p>
          I can withstand high pressure with high self-consciousness and
          patience. I'm also a good team-player.
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
          <Badge variant="light">docker</Badge>
          &nbsp;
          <Badge variant="light">CI/CD</Badge>
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
            <a href="https://www.weventure.global/" rel="noopener noreferrer">
              WeVenture
            </a>
            <div class="float-right">Aug 2018 - May 2019</div>
            <p>
              Develop and migrate front-end services for various products,
              mostly video services and managements.
              <br />
              Focus on performance, security and maintainability to building app
              that scales.
              <br />
              <br />
              Using ES6 + React.js/Vue.js to build single-page web apps with
              server-side rendering via NodeJS.
              <br />
              Building code base with specific coding convention, tech-stack;
              maintaining, re-building/migrating legacy app.
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
        <ul class="timeline">
          <li>
            <span>Technical Mentor @&nbsp;</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://freecontest.xyz/"
            >
              SheCodes Vietnam
            </a>
            <div class="float-right">Jun 2020 - Present</div>
            <p>Orgranize & mentor at SheCodes Hackathon 2020</p>
          </li>
          <li>
            <span>Software Engineer, DevOps @&nbsp;</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://freecontest.xyz/"
            >
              FreeContest
            </a>
            <div class="float-right">Jan 2020 - Present</div>
            <p>
              Building a website, and monitor the server during the contest.
            </p>
          </li>
          <li>
            <span>Teaching Assistant @&nbsp;</span>
            <a
              href="https://www.facebook.com/DevCVNInnovationChallenge/"
              rel="noopener noreferrer"
            >
              Developer Circles from Facebook
            </a>
            <div class="float-right">Jul 2019 - Dec 2019</div>
            <p>
              Teaching Assistant for DevC Innovation Challenge Vietnam - Batch 2
              (HCMC) - Data Science Track
            </p>
          </li>
          <li>
            <span>Organizer @&nbsp;</span>
            <a href="https://www.golang.org.vn/" rel="noopener noreferrer">
              Golang Vietnam Community
            </a>
            <div class="float-right">Nov 2018 - Dec 2019</div>
            <p>Help organize GopherCon Vietnam 2018 in HCMC</p>
          </li>
          <li>
            <span>Head of IT Department @&nbsp;</span>
            <a href="https://fb.com/YCCLQD/" rel="noopener noreferrer">
              Young Creators Club
            </a>
            <div class="float-right">Sep 2015 - May 2017</div>
            <p>
              A club for young creators in my high school. I joined the club
              from the very first day of me in high school, with my passion for
              science and a lot of contributing to club's event, I've been
              promoted to the head of IT department.
            </p>
          </li>
          <li>
            <span>Co-Founder @&nbsp;</span>
            <a href="https://fb.com/lacacousticlqd/" rel="noopener noreferrer">
              Lac Acoustic Club
            </a>
            <div class="float-right">Sep 2016 - May 2017</div>
            <p>
              An acoustic music club in my high school. I and my friends formed
              this club to have a place to play guitar, drums and share
              knowledge with each other, and perform some mini-concerts in my
              school.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1># Education</h1>
        <ul class="timeline">
          <li>
            <span>Software Engineer @ FPT University</span>
            <div class="float-right">2016 - 2020</div>
            <p>Currently Junior, 100% Scholarship, GPA 3.5/4</p>
          </li>
          <li>
            <span>
              IT Specialized Class @ Le Quy Don Gifted High School, Danang
            </span>
            <div class="float-right">2013 - 2016</div>
            <p>Graduated, GPA 8.3/10</p>
          </li>
        </ul>
      </div>
      <div>
        <h1># Certifications</h1>
        <ul class="timeline">
          <li>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="datacamp.com/statement-of-accomplishment/track/00e161eb5eaa1d832db7de417372281d7a3a07d0"
              >
                Data Scientist
              </a>{' '}
              @ DataCamp
            </span>
          </li>
          <li>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.datacamp.com/statement-of-accomplishment/track/b1b83c23605fb4e241ecf9039f052ad3eb00828e"
              >
                Data Analyst
              </a>{' '}
              @ DataCamp
            </span>
          </li>
          <li>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.datacamp.com/statement-of-accomplishment/track/385798e0d801c7d77ff0f975efe1481e5f15ddac"
              >
                Python Programmer
              </a>{' '}
              @ DataCamp
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h1># Projects</h1>
        <ul class="timeline small">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/smart-bots/about"
            >
              The SmartBots System
            </a>
            <p>
              IoT project - cheap solution for smarthome, a network consists of
              multiple bots, helps people in control of electronics by attaching
              these bots onto the switch, button, plug,... instead of replaces
              them. Contest in many major competitions in Vietnam and won high
              prizes.
              <br />
              Built on top of Laravel, NodeJS, and Arduino, Intel Edison.
            </p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/smart-fan"
            >
              Smart Fan
            </a>
            <p>
              A smart fan which can detect the presence of human around it to
              change the direction, also can collect data about the environment
              such as: temperature, humidity,... to automatically change the
              settings, remote control,...
            </p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/huynhducduy.github.io"
            >
              Personal Website
            </a>
            <p>A personal website/blog built with React</p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/task-management-app"
            >
              Task Management App
            </a>
            <p>A task management app built with React-Native</p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/promotion-management-api"
            >
              Promotion Management & Analysis API
            </a>
            <p>An API for promotion management built with Golang</p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/sign-translater"
            >
              Sign Translator
            </a>
            <p>
              A glove can translate from sign language (the language of
              mute-people) to speech, built with Arduino.
            </p>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/huynhducduy/eLib"
            >
              eLib
            </a>
            <p>
              An online library which can help students browses, rent book, help
              librarian manage books and much more. Built with PHP, Javascript -
              jQuery, Bootstrap
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1># Accomplishments</h1>
        <ul class="timeline small">
          <li>
            <span>Top 20 at Best Developer Vietnam 2019</span>
          </li>
          <li>
            <span>Top 10 at Innovation Challenge Vietnam 2019</span>
          </li>
          <li>
            <span>
              1st Place at Viet Nam Science and Engineering Fair (ViSEF)
              Regional 2017
            </span>
          </li>
          <li>
            <span>
              1st Place at Group D3, Young Information and Technology Regional
              2017
            </span>
          </li>
          <li>
            <span>
              2nd Place at Group D3 - Young Information and Technology National
              2017
            </span>
          </li>
          <li>
            <span>3rd Place (Bronze Medal) at Vifotec National 2017</span>
          </li>
          <li>
            <span>3rd Place at Robodnic Da Nang 2017</span>
          </li>
          <li>
            <span>3rd Place at Young Maker Challenger National 2017</span>
          </li>
          <li>
            <span>
              3th Place at Group E3, Young Information and Technology Regional
              2017
            </span>
          </li>
          <li>
            <span>
              1st Place at Group D3, Young Information and Technology National
              2016
            </span>
          </li>
          <li>
            <span>
              1st Place at Group E3, Young Information and Technology Regional
              2016
            </span>
          </li>
          <li>
            <span>
              2nd Place at Group C, Young Information and Technology Regional
              2016
            </span>
          </li>
          <li>
            <span>2nd Place at Student Contest 2016</span>
          </li>
          <li>
            <span>
              2nd Place at Viet Nam Science and Engineering Fair (ViSEF)
              Regional 2016
            </span>
          </li>
          <li>
            <span>
              3rd Place at Group E3, Young Information and Technology National
              2016
            </span>
          </li>
          <li>
            <span>4th Place at Robodnic Da Nang 2016</span>
          </li>
          <li>
            <span>
              2nd Place at Group D2, Young Information and Technology National
              2015
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
