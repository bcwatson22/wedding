import React, { useRef, useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Respond from './../components/rsvp/Respond';

import { hasLocalStorage } from './../services/utils';

export const getGuestInfoQueryBuildtime = graphql`
  query guest($guestId: ID!) {
    wedding {
      guest(where: { id: $guestId }) {
        id
        personal {
          nicknames
          greeting
        }
        rsvp {
          responded
          date
          responses {
            name
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const wrapper = useRef(null);
  const { hideRouting } = useContext(RoutingContext);

  const { guest } = data.wedding;
  const userToken = guest.id;

  useEffect(() => {

    hideRouting();

    if (hasLocalStorage()) localStorage.setItem('bb-wedding-guest', userToken);

  }, [hideRouting, userToken]);

  return (
    <>
      <Layout pageName="rsvp" ref={wrapper}>
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          <Respond userToken={userToken} personal={guest.personal} wrapper={wrapper} />
        </Container>
      </Layout>
    </>
  );
};
