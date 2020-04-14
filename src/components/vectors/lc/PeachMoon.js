import React, { useRef } from 'react';

import Vector from './../Vector';

const PeachMoon = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--peach-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0.224 0 99.776 148.511">
        <path ref={shape} className="vector vector--mint vector--target" d="M74.486 74.261c0 41.012-33.25 74.25-74.262 74.25V0c41.012 0 74.262 33.24 74.262 74.261" />
        <path ref={circle} className="vector vector--mint" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PeachMoon;
