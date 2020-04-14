import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import KUTE from 'kute.js';
import 'kute.js/kute-svg';

const Vector = ({ children, shape, circle }) => {
  useEffect(() => {

    const tween = KUTE.fromTo(
      circle.current,
      {
        path: circle.current
      },
      {
        path: shape.current
      },
      {
        easing: 'easeOut',
        duration: 600,
        // morphIndex: 127
      }
    ).start();

    tween.start();

  });

  return (
    <>
      { children }
    </>
  );
};

Vector.propTypes = {
  children: PropTypes.node.isRequired,
  shape: PropTypes.node.isRequired,
  circle: PropTypes.node.isRequired
}

export default Vector;
