import React from 'react';

import Container from './Container';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Container>
        <h1 class="logo">
          <span class="abbr">B&B</span>
          <small class="abbr">29.5.2021</small>
          <span class="full">Billy & Becky</span>
          <small class="full">29.5.2021. Ilam, Dovedale, The Shire</small>
        </h1>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
