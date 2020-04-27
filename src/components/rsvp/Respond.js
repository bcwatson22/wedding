import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../../context/LoadingContext';

import Greeting from './Greeting';
import Form from './Form';
import Loading from './../Loading';
import Error from './../Error';

import { scrollTo } from './../../services/utils';

const getGuestRsvpQuery = gql`
  query guest($guestId: ID!) {
    guest(where: { id: $guestId }) {
      id
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
`;

const Respond = ({ userToken, personal, wrapper }) => {
  const [completed, setCompleted] = useState(null);
  const { hideLoading } = useContext(LoadingContext);

  const { loading, error, data } = useQuery(getGuestRsvpQuery, {
    variables: {
      guestId: userToken
    },
    onCompleted(result) {
      hideLoading();
      setCompleted(result.guest.rsvp.date);
    },
    onError() {
      hideLoading();
    }
  });

  const setStatus = (date) => {

    console.log('setStatus duck')

    scrollTo(wrapper);

    setCompleted(date);

  }

  return (
    <>
      <Greeting completed={completed} personal={personal} />
      {loading &&
        <Loading />
      }
      {data && data.guest &&
        <Form rsvpId={data.guest.rsvp.id} guests={data.guest.rsvp.responses ? data.guest.rsvp.responses : []} userToken={userToken} setStatus={setStatus} />
      }
      {error &&
        <Error error={error} />
      }
    </>
  );
};

Respond.propTypes = {
  userToken: PropTypes.string,
  personal: PropTypes.object,
  wrapper: PropTypes.object
}

export default Respond;
