import React, { useRef } from 'react';

import Vector from './../Vector';

const MintTriangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--mint-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0.016 0 99.968 263.951">
        <path ref={shape} className="vector vector--mint vector--target" d="M99.984 0v263.951H.016v-.037z" />
        <path ref={circle} className="vector vector--mint" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default MintTriangle;
