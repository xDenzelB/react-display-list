import React from 'react';

export default function BlogItem(props) {
  return <div className='blog-item'>
    <h2>Title: {props.title} </h2>
    <p>User: {props.user}</p>

  </div>;
}

