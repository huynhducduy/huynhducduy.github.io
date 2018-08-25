import React, { Component } from "react";
import { Input, Button, Spin, Icon, Alert } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Moment from "react-moment";
import { showBlog } from "../../actions/Blog/Show";
import Comment from "../Comment";
import {Helmet} from "react-helmet";

class ShowBlog extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.showBlog(params.id);
  }

  render() {
    const { error, loading, data } = this.props;
    if (error) {
      return <Alert type="error" message={error.message} banner />;
    }

    if (loading) {
      return (
        <div className="loading-container">
          <Spin className="loading" indicator={<Icon type="loading" spin />} />
        </div>
      );
    }

    const { image, title, description, updated_at: time, body: content } = data;

    const { TextArea } = Input;
    return (
      <div className="post">
      <Helmet>
        <title>{title}</title>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="//mrhmt.com/custom-comment/embed.min.js"></script>
      </Helmet>
        <img alt={title} src={image} />
        <p className="time">
          <Moment format="hh:mm A, MMM Do YYYY">{time}</Moment>
        </p>
        <h1>{title}</h1>
        <h2 className="description">{description}</h2>
        {/* <a onClick={this.props.history.goBack}><h3>What the fuck was that?</h3></a> */}
        <p className="content">{content}</p>
        <div className="comments-area">
          {/* <Input size="large" placeholder="Name" />
          <Input size="large" placeholder="E-mail" />
          <TextArea
            placeholder="Comment"
            autosize={{ minRows: 3, maxRows: 6 }}
          />
          <Button block size="large">
            Comment
          </Button>
          <ul className="comments">
            <Comment
              avatar="https://html5template.website/dyon/img/comment/avatar01.jpg"
              name="Jean Pietro"
              time="August 20"
              content="Morbi ut faucibus nulla, at fringilla est. Morbi lacinia sagittis purus."
            />
          </ul> */}
          <div id="custom-comment-box" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.showBlog.data,
  loading: state.showBlog.loading,
  error: state.showBlog.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showBlog
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowBlog);
