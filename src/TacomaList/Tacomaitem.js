import React from 'react';
import './tacoma.css';
export default function TacomaItem(props) {
  return <div className='tacoma-item'>
    <div style={{ background: props.color }}>
      <img src={props.image_url} />
      <h2>Tacoma Type: {props.name}</h2>
      <p>{props.year}</p>
      
    </div>

  </div>;
}

