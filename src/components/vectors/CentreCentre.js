import React from 'react';

import peachTrapezium from './../../assets/vectors/cc/peach-trapezium.svg';
import greenTriangle from './../../assets/vectors/cc/green-triangle.svg';
import mintTrapezium from './../../assets/vectors/cc/mint-trapezium.svg';
import pinkMoon from './../../assets/vectors/cc/pink-moon.svg';

const CentreCentre = () => {
  return (
    <div className="column column--cc">
      <img src={peachTrapezium} className="shape shape--peach-trapezium" alt="Vector" />
      <img src={greenTriangle} className="shape shape--green-triangle" alt="Vector" />
      <img src={mintTrapezium} className="shape shape--mint-trapezium" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
    </div>
  );
};

export default CentreCentre;
