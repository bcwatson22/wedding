import React, { useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import PropTypes from 'prop-types';
//
// import LoadingContext from './../context/LoadingContext';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dovedale.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.file.childImageSharp.fluid} />
  );
};

// Image.propTypes = {
//   classes: PropTypes.string,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string
// };

// export const query = graphql`
// query {
//   file(relativePath: { eq: "dovedale.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         base64
//         tracedSVG
//         aspectRatio
//         src
//         srcSet
//         srcWebp
//         srcSetWebp
//         sizes
//         originalImg
//         originalName
//       }
//     }
//   }
// }
// `;

export default Image;
