import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Loading from './../components/Loading';
import Error from './../components/Error';
import Responses from './../components/rsvp/Responses';

import { hasLocalStorage } from './../services/utils';

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
`;

export default ({ children, location }) => {
  const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  const { loading, error, data } = useQuery(getGuestResponsesQuery, {
    onCompleted(result) {
      console.log(result)
    }
  });

  useEffect(() => {

    hideLoading();
    hideRouting();

    if (hasLocalStorage()) localStorage.setItem('bb-wedding-admin', 'aye');

  }, [hideLoading, hideRouting]);

  return (
    <>
      <Layout pageName="responses">
        <Helmet>
          <title>Responses | B&B's wedding</title>
        </Helmet>
        <Container>
          <h1>Responses</h1>
          {loading &&
            <Loading />
          }
          {data && data.guests &&
            <Responses guests={data.guests} />
          }
          {error &&
            <Error error={error} />
          }
        </Container>
      </Layout>
    </>
  );
};
