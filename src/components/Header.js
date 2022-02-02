import React from 'react';

import Container from './Container';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Container>
        <h1 className="logo">
          <span className="abbr">B&B</span>
          <small className="abbr">14.5.2022</small>
          <span className="full">Billy & Becky</span>
          <small className="full">14.5.2022. Ilam, Dovedale, The Shire</small>
        </h1>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
