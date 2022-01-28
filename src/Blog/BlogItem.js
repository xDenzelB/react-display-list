import React from 'react';
import './blog.css';

export default function BlogItem(props) {
  return <div className='blog-item'>
    <div className='blog-info'>
      <h2><u>{props.title}</u></h2>
      <p>User: <u>{props.user}</u></p>
    </div>
    <div>
      <p>Replied: {props.reply}</p>
    </div>
  </div>;
}

