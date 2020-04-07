import React from 'react';

import peachMoon from './../../assets/vectors/lc/peach-moon.svg';
import peachTriangle from './../../assets/vectors/lc/peach-triangle.svg';
import mintTriangle from './../../assets/vectors/lc/mint-triangle.svg';
import peachRectangle from './../../assets/vectors/lc/peach-rectangle.svg';

const LeftCentre = () => {
  return (
    <div className="column column--lc">
      <img src={peachMoon} className="shape shape--peach-moon" alt="Vector" />
      <img src={peachTriangle} className="shape shape--peach-triangle" alt="Vector" />
      <img src={mintTriangle} className="shape shape--mint-triangle" alt="Vector" />
      <img src={peachRectangle} className="shape shape--peach-rectangle" alt="Vector" />
    </div>
  );
};

export default LeftCentre;
