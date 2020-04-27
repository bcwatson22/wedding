import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Gatecrasher from './../components/rsvp/Gatecrasher';

import { hasLocalStorage } from './../services/utils';

export default ({ children, location }) => {
  const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  const userToken = hasLocalStorage() && localStorage.getItem('bb-wedding-guest') ? localStorage.getItem('bb-wedding-guest') : null;

  useEffect(() => {

    if (userToken) {

      navigate(
        `/rsvp/${userToken}`,
        { replace: true }
      )

    } else {

      hideRouting();
      hideLoading();

    }

  }, [hideLoading, hideRouting, userToken]);

  return (
    <>
      <Layout pageName="rsvp">
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          {!userToken &&
            <Gatecrasher />
          }
        </Container>
      </Layout>
    </>
  );
};
