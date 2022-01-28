import React from 'react';
import Blog from './BlogItem';
export default function BlogList(props) {
  return <div className='blog-list'>
    {
      props.blog.map((blogger, i) => 
        <Blog key={blogger + i}
          {...blogger}
        />)
    }
  </div>;
}

