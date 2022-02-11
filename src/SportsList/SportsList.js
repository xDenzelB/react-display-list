import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Sports from './SportItem';

export default class SportsList extends Component {

  render() {

    return <div className='sport-list'>
      {
        this.props.sports.map((sport, i) =>
          <Sports key={sport + i}
            sport={sport}
          />)
        
      }


    </div>;
  }}

