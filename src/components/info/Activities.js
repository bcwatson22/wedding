import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import moment from 'moment';

const Activities = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dovedale.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const walk = '2021-05-30T11:00:00';

  return (
    <>
      <p>The surrounding countryside to the venue is <strong>absolutely spectacular</strong>! There is lots of hiking, cycling and climbing nearby if you're feeling active or adventurous.</p>
      <p>We are also going to be going on a <strong>short walk the morning after</strong> the wedding - at around <time dateTime={walk}><strong>{moment(walk).format('h:mma')} on {moment(walk).format('dddd Do MMMM')}</strong></time>. All are welcome and it'd be sweet to see you again if your hangover allows: but absolutly no dramas at all if you're dying a death or have to get back!</p>
      <Img fluid={image.file.childImageSharp.fluid} alt="Thorpe Cloud in Dovedale" />
    </>
  );
};

export default Activities;
