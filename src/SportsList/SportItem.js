import React from 'react';
import './sports.css';


export default function SportItem({ sport }) {
  return <div className='sport-item'>
    <div>
      <h3>{sport}</h3>
    </div>
  </div>;
}

