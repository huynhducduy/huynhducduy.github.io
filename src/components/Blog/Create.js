import React from "react";
import { Input } from "antd";
import { Helmet } from "react-helmet";

const { TextArea } = Input;

const CreateBlog = () => (
  <div>
    <Helmet>
      <title>Post new blog</title>
    </Helmet>
    <TextArea />
  </div>
);

export default CreateBlog;
