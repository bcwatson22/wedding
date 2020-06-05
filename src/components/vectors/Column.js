import React from 'react';
import PropTypes from 'prop-types';

import Vector from './Vector';

const Column = ({ position, shapes }) => {
  return (
    <div className={`column column--${position}`}>
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

Column.propTypes = {
  position: PropTypes.string.isRequired,
  shapes: PropTypes.array.isRequired
};

export default Column;
