import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ids = {
  arch: '9yLbQgnkE',
  festa: 'zUIDbD5x6M',
  tay: 'FdnRvyCAFp',
  tys: '1GNpq5bcLH'
}

const guestGreetingQuery = (shortId) => gql`
  query GuestGreeting {
    guest(query: { shortId: "${shortId}" }) {
      personal {
        nicknames
        greeting
      }
    }
  }
`

const Rsvp = () => {
  const { loading, error, data } = useQuery(guestGreetingQuery(ids.tys));

  return (
    <div>
      {loading && <div>loading</div>}
      {error && <div>{`encountered an error: ${error}`}</div>}
      {data &&
        <>
          <h1>Now then {data.guest.personal.nicknames}!</h1>
          <p>{data.guest.personal.greeting}</p>
        </>
      }
    </div>
  );
};

export default Rsvp;
