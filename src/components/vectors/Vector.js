import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { gsap } from 'gsap';

import LoadingContext from './../../context/LoadingContext';

const Vector = ({ children, desc, box, top = 0, delay = 0, final = false }) => {
  const vector = useRef(null);
  const { loadingCount, finishLoading } = useContext(LoadingContext);

  const offset = `${top}%`;
  const stagger = `${delay}s`;

  useEffect(() => {

    if (loadingCount <= 0) {

      gsap.fromTo(vector.current, {
        opacity: 0.001,
        y: '45vh',
        scale: 0.1,
        borderRadius: '50% / 15%'
      }, {
        opacity: 0.999,
        y: 0,
        scale: 1,
        borderRadius: 0,
        // delay: stagger,
        duration: 1,
        // ease: 'power1.out',
        clearProps: 'transform,opacity,border-radius',
        onComplete: () => {
          console.log('animation completed');
          if (final) finishLoading();
        }
      });

    }

  }, [vector, offset, stagger, final, loadingCount, finishLoading]);

  return (
    <svg className={`shape shape--${desc}`} xmlns="http://www.w3.org/2000/svg" viewBox={box} ref={vector}>
      { children }
    </svg>
  );
};

Vector.propTypes = {
  children: PropTypes.node.isRequired,
  desc: PropTypes.string.isRequired,
  box: PropTypes.string.isRequired,
  top: PropTypes.number,
  delay: PropTypes.number,
  final: PropTypes.bool
};

export default Vector;
