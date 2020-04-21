import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import LoadingContext from './../context/LoadingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Hero from './../components/Hero';

const IndexPage = () => {
  const {hideLoading} = useContext(LoadingContext);

  useEffect(() => {

    hideLoading();

  }, [hideLoading]);

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

export default IndexPage;
