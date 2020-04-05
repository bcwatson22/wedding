import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container>
        <h1>Billy & Becky</h1>
        <Link to="/info">Info</Link>
      </Container>
    </header>
  );
};

export default Header;
