import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Tacoma from './Tacomaitem';

export default class TacomaList extends Component {

  render() {
    return <div className='tacoma-list'>
      {
        this.props.tacoma.map((taco, i) => 
          <Tacoma key={taco + i}
            {...taco}
          />)
      }
    </div>;
  }
}
