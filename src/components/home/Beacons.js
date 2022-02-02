import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Beacons = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "beacons.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1840) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Img fluid={image.file.childImageSharp.fluid} alt="Billy and Becky" />
  );
};

export default Beacons;
