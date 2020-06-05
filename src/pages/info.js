import React, { useEffect, useContext } from 'react';
import Helmet from 'react-helmet';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Date from './../components/info/Date';
import Location from './../components/info/Location';
import Accomodation from './../components/info/Accomodation';
import Food from './../components/info/Food';
import Parking from './../components/info/Parking';
import Gifts from './../components/info/Gifts';
import Activities from './../components/info/Activities';
import Taxis from './../components/info/Taxis';
import Contact from './../components/info/Contact';

export default ({ children, location }) => {
  const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  const handleLoading = (ready) => {

    if (ready) hideLoading();

  }

  useEffect(() => {
    
    hideRouting();

  }, [hideRouting]);

  return (
    <Layout pageName="info">
      <Helmet>
        <title>Info | B&B's wedding</title>
      </Helmet>
      <Container>
        <h1>Info</h1>
        <Date />
        <Location handleLoading={(ready) => handleLoading(ready)} />
        <Accomodation />
        <Food />
        <Parking />
        <Gifts />
        <Activities />
        <Taxis />
        <Contact />
      </Container>
    </Layout>
  );
};
