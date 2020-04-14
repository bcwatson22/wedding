import React, { useRef } from 'react';

import Vector from './../Vector';

const GreenTrapezium = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--green-trapezium" xmlns="http://www.w3.org/2000/svg" viewBox="0.003 8.306 99.993 371.538">
        <path ref={shape} className="vector vector--green vector--target" d="M99.996 108.299v271.544L.051 115.891v263.953H.003V8.306c0 55.216 44.765 99.993 99.993 99.993" />
        <path ref={circle} className="vector vector--green" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default GreenTrapezium;
