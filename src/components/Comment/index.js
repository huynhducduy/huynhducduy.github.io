import React, { Component } from "react";
import ListComment from "./List";
import CreateComment from "./Create";

export default class Comment extends Component {
  render() {
    return (
      <div className="comments-area">
        <CreateComment blogId={this.props.blogId} />
        <ListComment blogId={this.props.blogId} />
      </div>
    );
  }
}
