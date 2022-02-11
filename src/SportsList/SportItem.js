import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './sports.css';


export default class SportItem extends Component {
  render() {
    return <div className='sport-item'>
      <div>
        <h3>{this.props.sport}</h3>
      </div>
    </div>;
  }
}
