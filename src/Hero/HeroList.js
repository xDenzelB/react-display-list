import React from 'react';

export default function HeroList(props) {
  return <div className='hero-list'>
    {
      props.hero.map((heroes, i) => 
        <Hero key={heroes + i}
          {...heroes}
        />)
    }
  </div>;
}

