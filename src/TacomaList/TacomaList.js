import React from 'react';
import Tacoma from './Tacomaitem';

export default function TacomaList(props) {
  return <div className='tacoma-list'>
    {
      props.tacoma.map((taco, i) => 
        <Tacoma key={taco + i}
          {...taco}
        />)
    }
  </div>;
}

