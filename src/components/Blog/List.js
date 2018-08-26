import React, { Component } from "react";
import { Pagination, Spin, Icon, Alert } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";
import ListBlogAction from "../../actions/Blog/List";
import ListItemBlog from "./ListItem";

class ListBlog extends Component {
  updateWidth = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.getElementsByTagName("body")[0].clientWidth;
    this.setState({ width });
  };

  componentWillMount = () => {
    this.updateWidth();
  };

  componentDidMount = () => {
    this.props.ListBlogAction(this.props.match.params.page || 1, 3);
    window.addEventListener("resize", this.updateWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWidth);
  };

  handleChange = (page, pageSize) => {
    this.props.ListBlogAction(page, pageSize);
    this.props.history.push(`/blogs/${page}`);
  };

  render() {
    const { loading, data, error } = this.props;

    if (loading) {
      return (
        <div className="loading-container">
          <Spin className="loading" indicator={<Icon type="loading" spin />} />
        </div>
      );
    }

    if (data) {
      const listBlog = data.blogs.map(blog => (
        <ListItemBlog
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          time={blog.updated_at}
          description={blog.description}
        />
      ));
      const { width } = this.state;
      return (
        <div>
          <Helmet>
            <title>
              Blog / Page {`${data.meta.pagination.current_page}`} - Huynh Duc
              Duy
            </title>
          </Helmet>
          <div className="blog">
            {listBlog}
            {width < 1024 ? (
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

    if (error) {
      return <Alert type="error" message={error.message} banner />;
    }

    return null;
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
      ListBlogAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBlog);
