import React, { useRef } from 'react';

import Vector from './../Vector';

const PinkMoon = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--pink-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 179.9">
        <path ref={shape} className="vector vector--pink vector--target" d="M10 90c0 49.7 40.3 90 90 90V0C50.3 0 10 40.3 10 90z" />
        <path ref={circle} className="vector vector--pink" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PinkMoon;
