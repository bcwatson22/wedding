import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Dales = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dales.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3088) {
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

export default Dales;
