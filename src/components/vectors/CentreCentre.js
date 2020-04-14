import React from 'react';

// import peachTrapezium from './../../assets/patterns/cc/peach-trapezium.svg';
// import greenTriangle from './../../assets/patterns/cc/green-triangle.svg';
// import mintTrapezium from './../../assets/patterns/cc/mint-trapezium.svg';
// import pinkMoon from './../../assets/patterns/cc/pink-moon.svg';

import PeachTrapezium from './cc/PeachTrapezium';
import GreenTriangle from './cc/GreenTriangle';
import MintTrapezium from './cc/MintTrapezium';
import PinkMoon from './cc/PinkMoon';

const CentreCentre = () => {
  return (
    <div className="column column--cc">
      {/*<img src={peachTrapezium} className="shape shape--peach-trapezium" alt="Vector" />
      <img src={greenTriangle} className="shape shape--green-triangle" alt="Vector" />
      <img src={mintTrapezium} className="shape shape--mint-trapezium" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />*/}
      <PeachTrapezium />
      <GreenTriangle />
      <MintTrapezium />
      <PinkMoon />
    </div>
  );
};

export default CentreCentre;
