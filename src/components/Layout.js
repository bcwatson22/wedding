import React, { useContext, forwardRef } from 'react';
import Helmet from 'react-helmet';

import 'assets/styles/application.scss';

import LoadingContext from './../context/LoadingContext';

import Header from './Header';
import Background from './Background';
import Footer from './Footer';

const Layout = (props, ref) => {
  const {loadingCount} = useContext(LoadingContext);

  let className = '';

  if (props.pageName) className = `page-${props.pageName}`;

  return (
    <>
      <Helmet bodyAttributes={{class: className}}>
        <title>Gatsby Site</title>
      </Helmet>
      <div className={`wrapper${loadingCount > 0 ? ' loading' : ''}`}>
        <Header />
        <main ref={ref}>
          <Background />
          { props.children }
        </main>
        <Footer />
      </div>
    </>
  );

};

export default forwardRef(Layout);
