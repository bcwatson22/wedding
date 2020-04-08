import React from 'react';

import peachTriangle from './../../assets/patterns/rc/peach-triangle.svg';
import greenTriangle from './../../assets/patterns/rc/green-triangle.svg';
import mintRing from './../../assets/patterns/rc/mint-ring.svg';
import pinkMoon from './../../assets/patterns/rc/pink-moon.svg';
import peachTrapezium from './../../assets/patterns/rc/peach-trapezium.svg';

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
