import React from 'react';

import fetch from 'isomorphic-fetch';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import LoadingProvider from './../context/LoadingProvider';
import RoutingProvider from './../context/RoutingProvider';

const client = new ApolloClient({
  uri: 'https://wedding-server-e0acff40a9.herokuapp.com/wedding-service/prod',
  fetch
});

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <LoadingProvider>
        <RoutingProvider>
          { element }
        </RoutingProvider>
      </LoadingProvider>
    </ApolloProvider>
  )
}
