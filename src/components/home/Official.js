import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Official = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "official.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3456) {
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

export default Official;
