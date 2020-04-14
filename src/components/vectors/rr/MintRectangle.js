import React, { useRef } from 'react';

import Vector from './../Vector';

const MintRectangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--mint-rectangle" xmlns="http://www.w3.org/2000/svg" viewBox="0.009 -0.406 99.994 245.463">
        <path ref={shape} className="vector vector--mint vector--target" d="M.009-.406h99.994v245.463H.009z" />
        <path ref={circle} className="vector vector--mint" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default MintRectangle;
