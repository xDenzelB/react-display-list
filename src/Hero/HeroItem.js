import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './hero.css';

export default class heroItem extends Component {

  render() {
    return <div className='hero-item'>
      <h2>{this.props.name}</h2>
      <div>
        <p>Location: {this.props.location}</p>
        <p>Powers: {this.props.superpower}</p>
      </div>
      <div>
        <h2>Alter Ego: {this.props.alterEgo.identity}</h2>
        <p>Occupation: {this.props.alterEgo.job}</p>
      </div>
    </div>;
  }
}
