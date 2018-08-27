import React, { Component } from "react";
import { Form, Icon, Input, Button, Alert } from "antd";
import { Helmet } from "react-helmet";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LoginAuthAction from "../../actions/Auth/Login";

class LoginAuth extends Component {
  componentDidUpdate = () => {
    if (this.props.data) {
      localStorage.setItem("jwt", this.props.data.jwt);
      localStorage.setItem("expires_at", this.props.data.expires_at);
      localStorage.setItem("email", this.props.data.email);
      localStorage.setItem("name", this.props.data.name);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.LoginAuthAction(values.email, values.password);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const FormItem = Form.Item;
    return (
      <div className="login">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <h1>Provide indentity to continue</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                { required: true, message: "Please input your email!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              loading={this.props.loading}
              block
              size="large"
              type="primary"
              htmlType="submit"
            >
              Log in
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
  data: state.login.data,
  loading: state.login.loading,
  error: state.login.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      LoginAuthAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(LoginAuth));
