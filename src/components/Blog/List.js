import React, { Component } from "react";
import { Pagination, Spin, Icon, Alert } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { listBlog } from "../../actions/Blog/List";
import ItemBlog from "./Item";
import {Helmet} from "react-helmet";

class ListBlog extends Component {
  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName("body")[0];
    const width =
      w.innerWidth || documentElement.clientWidth || body.clientWidth;
    // const height =
    //   w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.setState({ width });
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;

    this.props.listBlog(params.page || 1, 3);
    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  handleChange = (page, pageSize) => {
    this.props.listBlog(page || 1, pageSize);
    this.props.history.push(`/blogs/${page}`);
  };

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

    const listBlog = data.blogs.map(blog => (
      <ItemBlog
        key={blog.id}
        id={blog.id}
        image={blog.image}
        title={blog.title}
        time={blog.updated_at}
        description={blog.description}
      />
    ));

    return (
      <div>
      <Helmet>
        <title>Blog / Page {`${data.meta.pagination.current_page}`} - Huynh Duc Duy</title>
      </Helmet>
        <div className="blog">
          {listBlog}
          {this.state.width < 1024 ? (
            <Pagination
              simple
              defaultCurrent={data.meta.pagination.current_page}
              total={data.meta.pagination.total_objects}
              pageSize={data.meta.pagination.per_page}
              onChange={this.handleChange}
            />
          ) : (
            <Pagination
              className="pagination-advanced"
              defaultCurrent={data.meta.pagination.current_page}
              total={data.meta.pagination.total_objects}
              pageSize={data.meta.pagination.per_page}
              onChange={this.handleChange}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.listBlog.data,
  loading: state.listBlog.loading,
  error: state.listBlog.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listBlog
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBlog);
