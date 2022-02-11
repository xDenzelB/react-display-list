import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Hero from './HeroItem';

export default class HeroList extends Component {

  render() {
    return <div className='hero-list'>
      {
        this.props.hero.map((heroes, i) => 
          <Hero key={`${heroes}-${i}`}
            {...heroes}
          />)
      }
    </div>;
  }
}
