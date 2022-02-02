import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Flores = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "flores.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
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

export default Flores;
