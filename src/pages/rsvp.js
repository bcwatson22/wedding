import React, { useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from './../components/Layout';
import Container from './../components/Container';

import Greeting from './../components/rsvp/Greeting';
import Form from './../components/rsvp/Form';

const userTokens = {
  arch: '9yLbQgnkE',
  festa: 'zUIDbD5x6M',
  tay: 'FdnRvyCAFp',
  tys: '1GNpq5bcLH'
}

const getGuestInfoQuery = () => gql`
  query Guest($shortId: String!) {
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
  const greeting = useRef(null);
  const [completed, setCompleted] = useState(null);
  const urlParams = new URLSearchParams(location.search);
  const userToken = location.search.length ? urlParams.get('guest') : null;

  const { loading, error, data } = useQuery(getGuestInfoQuery(), {
    variables: {
      shortId: userTokens[userToken]
    },
    skip: !userToken,
    onCompleted(result) {
      console.log(result)
    }
  });

  const setStatus = (date) => {

    console.log(greeting);

    setCompleted(date);

  }

  return (
    <>
      <Layout pageName="rsvp" loaded={!loading || !userToken}>
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          {data &&
            <>
              <Greeting completed={data && data.guest.response.date ? data.guest.response.date : completed} personal={data ? data.guest.personal : {}} ref={greeting} />
              <Form shortId={userTokens[userToken]} guests={data.guest.responses ? data.guest.responses : []} setStatus={setStatus} />
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
