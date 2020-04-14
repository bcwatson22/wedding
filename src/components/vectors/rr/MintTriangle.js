import React, { useRef } from 'react';

import Vector from './../Vector';

const MintTriangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--mint-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.004 263.998">
        <path ref={shape} className="vector vector--mint vector--target" d="M100.002 0v263.998L-.002 0z" />
        <path ref={circle} className="vector vector--mint" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default MintTriangle;