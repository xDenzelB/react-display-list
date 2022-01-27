import React from 'react';
import Sports from './SportItem';

export default function SportsList(props) {
  return <div className='sport-list'>
    {
      props.sports.map((sport, i) =>
        <Sports key={sport + i}
          sport={sport}
        />)
        
    }


  </div>;
}

