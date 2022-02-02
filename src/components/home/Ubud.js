import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Ubud = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ubud.jpg" }) {
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

export default Ubud;
