import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Nido = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nido.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
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

export default Nido;
