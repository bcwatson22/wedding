import React, { useRef } from 'react';

import Vector from './../Vector';

const PeachTrapezium = () => {
  const shape = useRef(null);
  const circle = useRef(null);

  return (
    <Vector shape={shape} circle={circle}>
      <svg className="shape shape--peach-trapezium" xmlns="http://www.w3.org/2000/svg" viewBox="0.003 294 99.993 123.972">
        <path ref={shape} className="vector vector--peach vector--target" d="M99.996 294v23.967c-55.229 0-99.993 44.776-99.993 100.005V294h99.993z" />
        <path ref={circle} className="vector vector--peach" d="M55 132c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
      </svg>
    </Vector>
  );
};

export default PeachTrapezium;
