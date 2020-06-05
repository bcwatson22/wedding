import React, { forwardRef } from 'react';

import Vector from './Vector';

const Column = (props, ref) => {
  const { position, shapes } = props;

  return (
    <div className={`column column--${position}`} ref={ref}>
      {shapes.map((shape, index) => {
        const { desc, box, component, final } = shape;

        return (
          <Vector key={`${position}__${desc}`} desc={desc} box={box} delay={index / 20} final={final}>
            {component}
          </Vector>
        );
      })}
    </div>
  );
};

export default forwardRef(Column);
