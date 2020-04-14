import React, { useRef } from 'react';

import Vector from './../Vector';

const GreenTriangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--green-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="-0.002 0 100.004 263.998">
        <path ref={shape} className="vector vector--green vector--target" d="M100.002 263.998H-.002V0z" />
        <path ref={circle} className="vector vector--green" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default GreenTriangle;
