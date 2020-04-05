import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const Info = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Info</title>
      </Helmet>
      <Container>
        <h1>Info</h1>
      </Container>
    </Layout>
  );
};

export default Info;
