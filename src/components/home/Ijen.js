import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Ijen = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ijen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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

export default Ijen;
