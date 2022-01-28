import React from 'react';
import './hero.css';

export default function heroItem(props) {
  return <div className='hero-item'>
    <h2>{props.name}</h2>
    <div>
      <p>Location: {props.location}</p>
      <p>Powers: {props.superpower}</p>
    </div>
    <div>
      <h2>Alter Ego: {props.alterEgo.identity}</h2>
      <p>Occupation: {props.alterEgo.job}</p>
    </div>
  </div>;
}

