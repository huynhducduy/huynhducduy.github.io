import React, { Component } from "react";
import "./styles/App.css";
import { Row, Col, BackTop, Icon } from "antd";
import { HashRouter as Router, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Intro from "./components/Intro";
import ListBlog from "./components/Blog/List";
import ShowBlog from "./components/Blog/Show";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BackTop>
            <Icon type="up-circle" />
          </BackTop>
          <Row>
            <Col lg={12}>
              <Intro />
            </Col>
            <Col lg={12}>
              <div>
                <Route exact path="/" component={Resume} />
                <Route exact path="/blogs" component={ListBlog} />
                <Route exact path="/blogs/:page" component={ListBlog} />
                <Route exact path="/blog/:id" component={ShowBlog} />
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
