import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './blog.css';

export default class BlogItem extends Component {

  render() {
    return <div className='blog-item'>
      <div className='blog-info'>
        <h2><u>{this.props.title}</u></h2>
        <p>User: <u>{this.props.user}</u></p>
      </div>
      <div>
        <p>Replied: {this.props.reply}</p>
      </div>
    </div>;
  }
}
