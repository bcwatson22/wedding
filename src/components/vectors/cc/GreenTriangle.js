import React, { useRef } from 'react';

import Vector from './../Vector';

const GreenTriangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--green-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0.015 0 99.969 263.953">
        <path ref={shape} className="vector vector--green vector--target" d="M99.984 263.904v.049H.015V0z" />
        <path ref={circle} className="vector vector--green" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default GreenTriangle;
