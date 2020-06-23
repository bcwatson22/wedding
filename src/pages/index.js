import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Hero from './../components/home/Hero';

export default () => {
  const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  useEffect(() => {

    hideLoading();
    hideRouting();

  }, [hideLoading, hideRouting]);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home | B&B's wedding</title>
      </Helmet>
      <Container>
        <Hero />
      </Container>
    </Layout>
  );
};
