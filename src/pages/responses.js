import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';

const getGuestResponsesQuery = gql`
  query guests {
    guests {
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
        responded
        date
        responses {
          name
          attending
          dietary
          comments
        }
      }
    }
  }
`

const Responses = ({ children, location }) => {
  const {hideLoading} = useContext(LoadingContext);
  const {hideRouting} = useContext(RoutingContext);

  const { loading, error, data } = useQuery(getGuestResponsesQuery, {
    onCompleted(result) {
      console.log(result)
    }
  });

  useEffect(() => {

    hideLoading();
    hideRouting();

  }, [hideLoading, hideRouting]);

  return (
    <>
      <Layout pageName="responses">
        <Helmet>
          <title>Responses | B&B's wedding</title>
        </Helmet>
        <Container>
          {loading &&
            <>
              <h1>Un momentito</h1>
              <h2>Just grabbing the deets</h2>
            </>
          }
          {data &&
            <>
              <h1>Responses</h1>
              <p>{JSON.stringify(data)}</p>
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

export default Responses;
