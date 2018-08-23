import React, { Component } from 'react';
import { Avatar } from 'antd';

export default class Comment extends Component {
    render() {
        return (
            <li>
                <div className="comment-avatar">
                    <Avatar size={65} src={ this.props.avatar } />
                </div>
                <div className="comment-content">
                    <span className="comment-meta"><span className="username">{ this.props.name }</span> on { this.props.time }</span>
                    <p>{ this.props.content }</p>
                </div>
            </li>
        );
    }
}
