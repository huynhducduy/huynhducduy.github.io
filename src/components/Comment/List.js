import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Alert } from "antd";
import { connect } from "react-redux";
import CommentItem from "./Item";
import ListCommentAction from "../../actions/Comment/List";

class ListComment extends Component {
  componentDidMount = () => {
    this.props.ListCommentAction(this.props.blogId);
  };

  render() {
    const { loading, data, error } = this.props;

    if (loading) {
    }

    if (data) {
      return (
        <ul className="comments">
          {data.map(comment => (
            <CommentItem
              key={comment.id}
              content={comment.content}
              name={comment.name}
              email={comment.email}
              time={comment.updated_at}
            />
          ))}
        </ul>
      );
    }

    if (error) {
      return <Alert type="error" message={error.message} banner />;
    }

    return null;
  }
}

const mapStateToProps = state => ({
  data: state.listComment.data,
  loading: state.listComment.loading,
  error: state.listComment.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ListCommentAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComment);
