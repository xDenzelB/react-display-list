import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Blog from './BlogItem';
export default class BlogList extends Component {

  render() {
    return <div className='blog-list'>
      {
        this.props.blog.map((blogger, i) => 
          <Blog key={blogger + i}
            {...blogger}
          />)
      }
    </div>;
  }}

