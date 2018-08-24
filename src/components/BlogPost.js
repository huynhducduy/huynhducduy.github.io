import React, { Component } from "react";
import { Input, Button } from "antd";
import Comment from "./Comment";

class BlogPost extends Component {
  render() {
    const { TextArea } = Input;

    return (
      <div className="post">
        <img
          alt="title"
          src="https://mrhmt.com/assets/img/react-ultimate.jpg"
        />
        <p className="time">24 July 2017</p>
        <h1>Best Experience at Road trip to Colorado</h1>
        <h2 className="description">
          Recently, in the SWD course at my university, the final project was to
          create a web application, a mobile application (Android/iOS) that used
          the same backend (using Restful API).
        </h2>
        <h3>What the fuck was that?</h3>
        <p className="content">
          I’m building an online houses-for-rent app, where users can do things
          like add new house for rent, remove after posted, add to favorite. And
          the web admin can do approves/reject the houses, user management…
        </p>
        <p className="content">
          My apps manage state with Redux and each app speaks to the same
          backend API powered by Firebase SDK.
        </p>
        <div className="comments-area">
          <Input size="large" placeholder="Name" />
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
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogPost;
