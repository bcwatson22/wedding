import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Information from './../components/info/Information';

const Info = ({ children, location }) => {
  const {hideLoading} = useContext(LoadingContext);
  const {hideRouting} = useContext(RoutingContext);

  useEffect(() => {

    hideLoading();
    hideRouting();

  }, [hideLoading, hideRouting]);

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
