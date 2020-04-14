import React, { useRef } from 'react';

import Vector from './../Vector';

const PinkMoon = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--pink-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 179.9">
        <path ref={shape} className="vector vector--pink vector--target" d="M4.2 179.9C51.9 177.7 90 138.3 90 90 90 40.3 49.7 0 0 0v179.9h4.2z" />
        <path ref={circle} className="vector vector--pink" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PinkMoon;
