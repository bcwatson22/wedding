import React, { useRef } from 'react';

import Vector from './../Vector';

const PeachTrapezium = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--peach-trapezium" xmlns="http://www.w3.org/2000/svg" viewBox="0.004 0 99.992 495.51">
        <path ref={shape} className="vector vector--peach vector--target" d="M99.996 0v495.461L.026 231.558V495.51H.004V0z" />
        <path ref={circle} className="vector vector--peach" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PeachTrapezium;
