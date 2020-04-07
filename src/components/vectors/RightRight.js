import React from 'react';

import mintTriangle from './../../assets/vectors/rr/mint-triangle.svg';
import greenTriangle from './../../assets/vectors/rr/green-triangle.svg';
import mintTrapezium from './../../assets/vectors/rr/mint-trapezium.svg';
import greenRing from './../../assets/vectors/rr/green-ring.svg';
import pinkMoon from './../../assets/vectors/rr/pink-moon.svg';
import mintRectangle from './../../assets/vectors/rr/mint-rectangle.svg';

const RightRight = () => {
  return (
    <div className="column column--rr">
      <img src={mintTriangle} className="shape shape--mint-triangle" alt="Vector" />
      <img src={greenTriangle} className="shape shape--green-triangle" alt="Vector" />
      <img src={mintTrapezium} className="shape shape--mint-trapezium" alt="Vector" />
      <img src={greenRing} className="shape shape--green-ring" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
      <img src={mintRectangle} className="shape shape--mint-rectangle" alt="Vector" />
    </div>
  );
};

export default RightRight;
