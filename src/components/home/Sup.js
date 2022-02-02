import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Sup = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1131) {
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

export default Sup;
