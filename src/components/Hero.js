import React from 'react';

import Container from './Container';

import hero from './../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section class="hero">
      <Container>
        <picture class="hero__image">
          <img src={hero} sizes="100vw" alt="B&B" />
        </picture>
      </Container>
    </section>
  );
};

export default Hero;
