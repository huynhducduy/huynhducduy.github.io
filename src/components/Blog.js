import React, { Component } from 'react';
import { Card, Pagination } from 'antd';
import { Link } from 'react-router-dom';

class BlogItem extends Component {
    render() {
        return (
            <Link to={`/blog/${ this.props.id }`}>
                <Card
                    className="blog-item"
                    cover={<img alt={ this.props.title } src={ this.props.image } />}
                >
                    <p className="time">{ this.props.time }</p>
                    <h2>{ this.props.title }</h2>
                    <h4>{ this.props.description }</h4>
                </Card>
            </Link>
        );
    }
}

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="blog">
                    <BlogItem
                        id="1"
                        image="https://mrhmt.com/assets/img/react-ultimate.jpg"
                        title="Ultimate React Develop 3 in 1"
                        time="2018, Aug 13  —  6 minute read"
                        description="Recently, in the SWD course at my university, the final project was to create a..." />
                    <Pagination
                        className="pagination"
                        defaultCurrent={1}
                        total={50} />
                </div>
            </div>
        );
    }
}

export default Blog;
