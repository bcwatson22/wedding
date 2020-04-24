import React, { useRef, useState, useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Gatecrasher from './../components/rsvp/Gatecrasher';
import Greeting from './../components/rsvp/Greeting';
import Form from './../components/rsvp/Form';

const userTokens = {
  arch: 'ck9d10e2x00qc07160lw3sb1x',
  festa: 'ck9d16dgj00r6071666co3j1k',
  tay: 'ck9d11or400qr0716w4w5h1k7',
  tys: 'ck9d16oqy00rk0716v3uvg8bc'
}

const getGuestInfoQuery = gql`
  query guest($id: ID!) {
    guest(where: { id: $id }) {
      id
      personal {
        greeting
        nicknames
      }
      contact {
        address
        email
      }
      rsvp {
        id
        responded
        date
        responses {
          id
          name
          attending
          dietary
          comments
        }
      }
    }
  }
`

const RSVP = ({ children, location }) => {
  const wrapper = useRef(null);
  const [completed, setCompleted] = useState(null);
  const {hideLoading} = useContext(LoadingContext);
  const {hideRouting} = useContext(RoutingContext);

  const haveLocalStorage = typeof localStorage !== 'undefined';
  const urlParams = new URLSearchParams(location.search);
  const urlToken = location.search.length ? urlParams.get('guest') : null;
  const userToken = haveLocalStorage && localStorage.getItem('bb-wedding-guest') ? localStorage.getItem('bb-wedding-guest') : userTokens[urlToken];

  const { loading, error, data } = useQuery(getGuestInfoQuery, {
    variables: {
      id: userToken
    },
    skip: !userToken,
    onCompleted(result) {
      hideLoading()
    }
  });

  useEffect(() => {

    hideRouting();

    if (userToken) {

      if (haveLocalStorage) localStorage.setItem('bb-wedding-guest', userToken);

    } else {

      hideLoading();

    }

  }, [haveLocalStorage, userToken, hideLoading, hideRouting]);

  const setStatus = (date) => {

    wrapper.current.scrollIntoView({ behavior: 'smooth' });

    setCompleted(date);

  }

  return (
    <>
      <Layout pageName="rsvp" ref={wrapper}>
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          {!userToken &&
            <Gatecrasher />
          }
          {loading &&
            <>
              <h1>Un momentito</h1>
              <h2>Just grabbing your deets</h2>
            </>
          }
          {data && data.guest &&
            <>
              <Greeting completed={completed ? completed : data.guest.rsvp.date} personal={data ? data.guest.personal : {}} />
              <Form rsvpId={data.guest.rsvp.id} guests={data.guest.rsvp.responses ? data.guest.rsvp.responses : []} setStatus={setStatus} />
            </>
          }
          {error &&
            <>
              <h1>Bollocks</h1>
              <h2>Something's gone wrong</h2>
              <p>Unfortunately it appears the server has either lost its shit or spat its dummy out pram. Please try again!</p>
              <p>{error}</p>
            </>
          }
        </Container>
      </Layout>
    </>
  );
};

export default RSVP;
