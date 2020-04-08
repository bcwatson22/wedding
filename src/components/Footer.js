import React from 'react';

import Container from 'components/Container';

import logo from './../assets/images/bw-logo-black.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <small>&copy; {new Date().getFullYear()}. <span>All rights reserved.</span></small>
        <a href="https://www.billywatson.net" className="logo"><img src={logo} alt="Billy Watson logo" /></a>
      </Container>
    </footer>
  );
};

export default Footer;
