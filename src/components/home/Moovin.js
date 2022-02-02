import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Moovin = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "moovin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3024) {
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

export default Moovin;
