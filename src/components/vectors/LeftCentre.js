import React from 'react';

import peachMoon from './../../assets/patterns/lc/peach-moon.svg';
import peachRectangle from './../../assets/patterns/lc/peach-rectangle.svg';
import peachTriangle from './../../assets/patterns/lc/peach-triangle.svg';
import mintTriangle from './../../assets/patterns/lc/mint-triangle.svg';

const LeftCentre = () => {
  return (
    <div className="column column--lc">
      <img src={peachMoon} className="shape shape--peach-moon" alt="Vector" />
      <img src={peachRectangle} className="shape shape--peach-rectangle" alt="Vector" />
      <img src={peachTriangle} className="shape shape--peach-triangle" alt="Vector" />
      <img src={mintTriangle} className="shape shape--mint-triangle" alt="Vector" />
    </div>
  );
};

export default LeftCentre;
