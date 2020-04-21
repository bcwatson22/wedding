import React, { useRef, useState, useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../context/LoadingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Gatecrasher from './../components/rsvp/Gatecrasher';
import Greeting from './../components/rsvp/Greeting';
import Form from './../components/rsvp/Form';

import SmoothScroll from 'smooth-scroll';

const userTokens = {
  arch: '9yLbQgnkE',
  festa: 'zUIDbD5x6M',
  tay: 'FdnRvyCAFp',
  tys: '1GNpq5bcLH'
}

const getGuestInfoQuery = gql`
  query guest($shortId: String!) {
    guest(query: { shortId: $shortId }) {
      personal {
        nicknames
        greeting
      }
      response {
        responded
        date
      }
      responses {
        name
        rsvp {
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

  const scroll = new SmoothScroll();
  const urlParams = new URLSearchParams(location.search);
  const urlToken = location.search.length ? urlParams.get('guest') : null;
  const userToken = localStorage.getItem('bb-wedding-guest') ? localStorage.getItem('bb-wedding-guest') : userTokens[urlToken];

  const { loading, error, data } = useQuery(getGuestInfoQuery, {
    variables: {
      shortId: userToken
    },
    skip: !userToken,
    onCompleted(result) {
      hideLoading()
    }
  });

  useEffect(() => {

    if (userToken) localStorage.setItem('bb-wedding-guest', userToken);

  }, [userToken]);

  const setStatus = (date) => {

    scroll.animateScroll(wrapper.current, null, { speed: 1000, easing: 'easeOutCubic' });

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
          {data &&
            <>
              <Greeting completed={completed ? completed : data.guest.response.date} personal={data ? data.guest.personal : {}} />
              <Form shortId={userToken} guests={data.guest.responses ? data.guest.responses : []} setStatus={setStatus} />
            </>
          }
          {error &&
            <>
              <h1>Bollocks</h1>
              <h2>Something's gone wrong</h2>
              <p>Unfortunately it appears the server has either lost its shit or spat its dummy out pram. Please try again!</p>
            </>
          }
        </Container>
      </Layout>
    </>
  );
};

export default RSVP;
