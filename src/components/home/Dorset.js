import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Dorset = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dorset.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
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

export default Dorset;
