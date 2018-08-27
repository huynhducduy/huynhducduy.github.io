import React, { Component } from "react";
import "./styles/App.css";
import { Row, Col, BackTop, Icon } from "antd";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import ListBlog from "./components/Blog/List";
import CreateBlog from "./components/Blog/Create";
import ShowBlog from "./components/Blog/Show";
import Resume from "./components/Resume";
import Intro from "./components/Intro";

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
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/blogs/:page" component={ListBlog} />
                  <Route exact path="/blogs" component={ListBlog} />
                  <Route exact path="/blog/create" component={CreateBlog} />
                  <Route exact path="/blog/:id" component={ShowBlog} />
                  <Route exact path="/" component={Resume} />
                </Switch>
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
