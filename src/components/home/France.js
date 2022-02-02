import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const France = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "france.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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

export default France;
