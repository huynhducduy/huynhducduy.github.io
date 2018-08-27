import React, { Component } from "react";
import { Form, Input, Button, Icon, Alert } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CreateCommentAction from "../../actions/Comment/Create";
import ListCommentAction from "../../actions/Comment/List";

class CreateComment extends Component {
  componentDidUpdate = () => {
    if (this.props.data) {
      this.props.form.resetFields();
      localStorage.setItem("email", this.props.data.email);
      localStorage.setItem("name", this.props.data.name);
      this.props.ListCommentAction(this.props.data.blog_id);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.CreateCommentAction(
          this.props.blogId,
          values.name,
          values.email,
          values.content
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const FormItem = Form.Item;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }],
              initialValue: localStorage.getItem("name")
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                }
              ],
              initialValue: localStorage.getItem("email")
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("content", {
              rules: [{ required: true, message: "Please input your comment!" }]
            })(
              <TextArea
                placeholder="Comment"
                autosize={{ minRows: 4, maxRows: 10 }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              loading={this.props.loading}
              block
              type="primary"
              size="large"
              htmlType="submit"
            >
              Comment
            </Button>
          </FormItem>
        </Form>
        {this.props.error && (
          <Alert type="error" message={this.props.error.message} banner />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.createComment.data,
  loading: state.createComment.loading,
  error: state.createComment.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      CreateCommentAction,
      ListCommentAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(CreateComment));
