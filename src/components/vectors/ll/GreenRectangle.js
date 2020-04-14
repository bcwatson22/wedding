import React, { useRef } from 'react';

import Vector from './../Vector';

const GreenRectangle = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--green-rectangle" xmlns="http://www.w3.org/2000/svg" viewBox="0.004 0 99.992 213.953">
        <path ref={shape} className="vector vector--green vector--target" d="M.004 0h99.992v213.953H.004z" />
        <path ref={circle} className="vector vector--green" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default GreenRectangle;
