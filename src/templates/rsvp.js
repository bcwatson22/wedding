import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const query = graphql`
  query getGuest($id: ID!) {
    guestsData {
      guest(where: { id: $id }) {
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

export default ({ data }) => {
  const page = data.guestsData.guest
  return (
    <Layout>
      <div>
        <h1>{JSON.stringify(data)}</h1>
        <h2></h2>
        <p></p>
      </div>
    </Layout>
  )
};
