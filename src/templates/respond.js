// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
//
// const getGuestInfoQueryBuildtime = graphql`
//   query getGuest($id: ID!) {
//     wedding {
//       guest(where: { id: $id }) {
//         id
//         personal {
//           nicknames
//           greeting
//         }
//         rsvp {
//           responded
//           date
//           responses {
//             name
//           }
//         }
//       }
//     }
//   }
// `;
//
// export default ({ data }) => {
//   const page = data.wedding.guest
//   return (
//     <Layout>
//       <div>
//         <h1>{JSON.stringify(data)}</h1>
//         <h2></h2>
//         <p></p>
//       </div>
//     </Layout>
//   )
// };






import React, { useRef, useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
//
// import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
// import Gatecrasher from './../components/rsvp/Gatecrasher';
// import Greeting from './../components/rsvp/Greeting';
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

// const getGuestInfoQueryRuntime = gql`
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
// `;

export default ({ data }) => {
  const wrapper = useRef(null);
  // const [completed, setCompleted] = useState(null);
  // const { hideLoading } = useContext(LoadingContext);
  const { hideRouting } = useContext(RoutingContext);

  const { guest } = data.wedding;
  // const haveLocalStorage = typeof localStorage !== 'undefined';
  const userToken = guest.id;

  // const { loading, error, data } = useQuery(getGuestInfoQueryRuntime, {
  //   variables: {
  //     id: userToken
  //   },
  //   // skip: !userToken,
  //   onCompleted(result) {
  //     console.log(result)
  //     hideLoading()
  //   }
  // });

  useEffect(() => {

    hideRouting();

    // if (userToken) {

      if (hasLocalStorage()) localStorage.setItem('bb-wedding-guest', userToken);

    // } else {

      // hideLoading();

    // }

  }, [hideRouting, userToken]);

  // const setStatus = (date) => {
  //
  //   console.log('setStatus duck')
  //
  //   scrollTo(wrapper.current);
  //
  //   setCompleted(date);
  //
  // }

  return (
    <>
      <Layout pageName="rsvp" ref={wrapper}>
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          <Respond userToken={userToken} personal={guest.personal} wrapper={wrapper.current} />
        </Container>
      </Layout>
    </>
  );
};
