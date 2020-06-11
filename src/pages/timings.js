import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Timeline from './../components/timings/Timeline';

export default ({ children, location }) => {
  const { hideRouting } = useContext(RoutingContext);

  useEffect(() => {

    hideRouting();

  }, [hideRouting]);

  return (
    <Layout pageName="timings">
      <Helmet>
        <title>Timings | B&B's wedding</title>
      </Helmet>
      <Container>
        <h1>Timings</h1>
        <Timeline />
      </Container>
    </Layout>
  );
};
