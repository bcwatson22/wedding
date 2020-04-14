import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import KUTE from 'kute.js';
// import 'kute.js/kute-svg';

const Vector = ({ children, shape, circle }) => {
  useEffect(() => {

    // const tween = KUTE.fromTo(
    //   circle.current,
    //   {
    //     path: circle.current
    //   },
    //   {
    //     path: shape.current
    //   },
    //   {
    //     easing: 'easeInOut',
    //     duration: 300,
    //     // morphIndex: 127
    //   }
    // ).start();

  });

  return (
    <>
      { children }
    </>
  );
};

Vector.propTypes = {
  children: PropTypes.node.isRequired,
  shape: PropTypes.object.isRequired,
  circle: PropTypes.object.isRequired
}

export default Vector;
