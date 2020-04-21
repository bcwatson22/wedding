import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import LoadingContext from './../context/LoadingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Information from './../components/info/Information';

const Info = ({ children, location }) => {
  const {hideLoading} = useContext(LoadingContext);

  useEffect(() => {

    hideLoading();

  }, [hideLoading]);

  return (
    <Layout pageName="info">
      <Helmet>
        <title>Info | B&B's wedding</title>
      </Helmet>
      <Container>
        <Information />
      </Container>
    </Layout>
  );
};

export default Info;
