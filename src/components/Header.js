import React from 'react';

import Container from './Container';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Container>
        <h1 className="logo">
          <span className="abbr">B&B</span>
          <small className="abbr">29.5.2021</small>
          <span className="full">Billy & Becky</span>
          <small className="full">29.5.2021. Ilam, Dovedale, The Shire</small>
        </h1>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
