import React from 'react';

import Image from './Image';

import hero from './../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <Image classes="hero__image" src={hero} alt="Hero image" />
    </section>
  );
};

export default Hero;
