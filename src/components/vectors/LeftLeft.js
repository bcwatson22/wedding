import React from 'react';

import peachTrapezium from './../../assets/vectors/ll/peach-trapezium.svg';
import pinkMoon from './../../assets/vectors/ll/pink-moon.svg';
import greenTrapezium from './../../assets/vectors/ll/green-trapezium.svg';
import greenRectangle from './../../assets/vectors/ll/green-rectangle.svg';

const LeftLeft = () => {
  return (
    <div className="column column--ll">
      <img src={peachTrapezium} className="shape shape--peach-trapezium" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
      <img src={greenTrapezium} className="shape shape--green-trapezium" alt="Vector" />
      <img src={greenRectangle} className="shape shape--green-rectangle" alt="Vector" />
    </div>
  );
};

export default LeftLeft;
