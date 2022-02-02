import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Ullswater = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ullswater.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 946) {
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

export default Ullswater;
