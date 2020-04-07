import React from 'react';

import peachTriangle from './../../assets/vectors/rc/peach-triangle.svg';
import greenTriangle from './../../assets/vectors/rc/green-triangle.svg';
import mintRing from './../../assets/vectors/rc/mint-ring.svg';
import pinkMoon from './../../assets/vectors/rc/pink-moon.svg';
import peachTrapezium from './../../assets/vectors/rc/peach-trapezium.svg';

const RightCentre = () => {
  return (
    <div className="column column--rc">
      <img src={peachTriangle} className="shape shape--peach-triangle" alt="Vector" />
      <img src={greenTriangle} className="shape shape--green-triangle" alt="Vector" />
      <img src={mintRing} className="shape shape--mint-ring" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
      <img src={peachTrapezium} className="shape shape--peach-trapezium" alt="Vector" />
    </div>
  );
};

export default RightCentre;
