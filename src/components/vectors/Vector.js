import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { gsap } from 'gsap';

import LoadingContext from './../../context/LoadingContext';

const Vector = ({ children, desc, box, delay, final = false }) => {
  const vector = useRef(null);
  const [animated, setAnimated] = useState(null);
  const { loadingCount, finishLoading } = useContext(LoadingContext);

  useEffect(() => {

    if (loadingCount <= 0) {

      gsap.fromTo(vector.current, {
        autoAlpha: 0.001,
        y: '45vh',
        scale: 0.1
      }, {
        autoAlpha: 0.999,
        y: 0,
        scale: 1,
        // transformOrigin: '50% 0',
        delay: delay,
        duration: 0.6,
        // ease: 'power1.out',
        clearProps: 'transform,opacity,visibility',
        onComplete: () => {
          setAnimated(true);
          if (final) finishLoading();
        }
      });

    }

  }, [vector, delay, final, loadingCount, finishLoading]);

  return (
    <svg className={`shape shape--${desc}${animated ? ' shape--animated' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox={box} ref={vector}>
      { children }
    </svg>
  );
};

Vector.propTypes = {
  children: PropTypes.node.isRequired,
  desc: PropTypes.string.isRequired,
  box: PropTypes.string.isRequired,
  final: PropTypes.bool
};

export default Vector;
