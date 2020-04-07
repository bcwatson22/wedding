import React from 'react';

import hero from './../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <picture className="hero__image">
        <img src={hero} sizes="100vw" alt="B&B" />
      </picture>
    </section>
  );
};

export default Hero;
