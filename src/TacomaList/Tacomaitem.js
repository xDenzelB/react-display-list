import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './tacoma.css';
export default class TacomaItem extends Component {

  render() {
    return <div className='tacoma-item'>
      <div style={{ background: this.props.color }}>
        <img src={this.props.image_url} />
        <h2>Tacoma Type: {this.props.name}</h2>
        <p>{this.props.year}</p>
      
      </div>

    </div>;
  }
}
