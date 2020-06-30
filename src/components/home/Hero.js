import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

const Hero = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section className="hero">
      <Img fluid={image.file.childImageSharp.fluid} alt="Billy and Becky" />
    </section>
  );
};

export default Hero;
