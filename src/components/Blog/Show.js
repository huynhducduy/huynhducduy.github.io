import React, { Component } from "react";
import { Spin, Icon, Alert } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Helmet } from "react-helmet-async";
import ShowBlogAction from "../../actions/Blog/Show";
import Comment from "../Comment";

class ShowBlog extends Component {
    componentDidMount = () => {
        const {
            match: { params },
        } = this.props;
        this.props.ShowBlogAction(params.id);
    };

    render() {
        const { loading, data, error } = this.props;

        if (loading) {
            return (
                <div className="loading-container">
                    <Spin
                        className="loading"
                        indicator={<Icon type="loading" spin />}
                    />
                </div>
            );
        }

        if (data) {
            const {
                id,
                image,
                title,
                description,
                updated_at: time,
                body: content,
            } = data;

            return (
                <div className="post">
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                    <img alt={title} src={image} />
                    <p className="time">
                        <Moment format="hh:mm A, MMM Do YYYY">{time}</Moment>
                    </p>
                    <h1>{title}</h1>
                    <h2 className="description">{description}</h2>
                    {/* <a onClick={this.props.history.goBack}><h3>This is h3</h3></a> */}
                    <p className="content">{content}</p>
                    <Comment blogId={id} />
                </div>
            );
        }

        if (error) {
            return <Alert type="error" message={error.message} banner />;
        }

        return null;
    }
}

const mapStateToProps = state => ({
    data   : state.showBlog.data,
    loading: state.showBlog.loading,
    error  : state.showBlog.error,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ShowBlogAction,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowBlog);
