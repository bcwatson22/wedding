import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/styles/application.scss';

import Header from './Header';
import Background from './Background';
import Footer from './Footer';

const Layout = ({ children, pageName, loaded }) => {

  let className = '';

  if (pageName) className = `page-${pageName}`;

  return (
    <>
      <Helmet bodyAttributes={{class: className}}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>
          <Background loaded={loaded} />
          { children }
        </main>
        <Footer />
      </div>
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.node,
  loaded: PropTypes.bool.isRequired
}

export default Layout;
