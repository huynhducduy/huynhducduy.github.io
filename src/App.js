import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Intro from "./components/Intro";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Row>
            <Col lg={12}>
              <Intro />
            </Col>
            <Col lg={12}>
              <div>
                <Route exact path="/" component={Resume} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:id" component={BlogPost} />
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
