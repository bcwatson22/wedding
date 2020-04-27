import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import Gatecrasher from './../components/rsvp/Gatecrasher';
// import Greeting from './../components/rsvp/Greeting';
// import Form from './../components/rsvp/Form';
//
import { hasLocalStorage } from './../services/utils';
//
// const getGuestInfoQuery = gql`
//   query guest($id: ID!) {
//     guest(where: { id: $id }) {
//       id
//       personal {
//         greeting
//         nicknames
//       }
//       contact {
//         address
//         email
//       }
//       rsvp {
//         id
//         responded
//         date
//         responses {
//           id
//           name
//           attending
//           dietary
//           comments
//         }
//       }
//     }
//   }
// `

const RSVP = ({ children, location }) => {
  // const wrapper = useRef(null);
  // const [completed, setCompleted] = useState(null);
  const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  // const haveLocalStorage = typeof localStorage !== 'undefined';
  // const urlParams = new URLSearchParams(location.search);
  // const urlToken = location.search.length ? urlParams.get('guest') : null;
  const userToken = hasLocalStorage() && localStorage.getItem('bb-wedding-guest') ? localStorage.getItem('bb-wedding-guest') : null;

  // const { loading, error, data } = useQuery(getGuestInfoQuery, {
  //   variables: {
  //     id: userToken
  //   },
  //   skip: !userToken,
  //   onCompleted(result) {
  //     hideLoading()
  //   }
  // });

  useEffect(() => {



    if (userToken) {

      // if (haveLocalStorage) localStorage.setItem('bb-wedding-guest', userToken);

      navigate(
        `/rsvp/${userToken}`,
        { replace: true }
      )

    } else {

      hideRouting();
      hideLoading();

    }

  }, [hideLoading, hideRouting, userToken]);

  // const setStatus = (date) => {
  //
  //   scrollTo(wrapper.current);
  //
  //   setCompleted(date);
  //
  // }

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

export default RSVP;
