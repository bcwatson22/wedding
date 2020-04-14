import React, { useRef } from 'react';

import Vector from './../Vector';

const PeachTrapezium = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--peach-trapezium" xmlns="http://www.w3.org/2000/svg" viewBox="-0.001 0 100.004 68.994">
        <path ref={shape} className="vector vector--peach vector--target" d="M100.003 0v68.994H-.001v-.047c45.693 0 84.68-28.64 100.004-68.947" />
        <path ref={circle} className="vector vector--peach" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PeachTrapezium;
