import React from 'react';

// import mintTriangle from './../../assets/patterns/rr/mint-triangle.svg';
// import greenTriangle from './../../assets/patterns/rr/green-triangle.svg';
// import mintTrapezium from './../../assets/patterns/rr/mint-trapezium.svg';
// import pinkMoon from './../../assets/patterns/rr/pink-moon.svg';
// import mintRectangle from './../../assets/patterns/rr/mint-rectangle.svg';
// import greenRing from './../../assets/patterns/rr/green-ring.svg';

import MintTriangle from './rr/MintTriangle';
import GreenTriangle from './rr/GreenTriangle';
import MintTrapezium from './rr/MintTrapezium';
import PinkMoon from './rr/PinkMoon';
import MintRectangle from './rr/MintRectangle';
import GreenRing from './rr/GreenRing';

const RightRight = () => {
  return (
    <div className="column column--rr">
      {/*<img src={mintTriangle} className="shape shape--mint-triangle" alt="Vector" />
      <img src={greenTriangle} className="shape shape--green-triangle" alt="Vector" />
      <img src={mintTrapezium} className="shape shape--mint-trapezium" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
      <img src={mintRectangle} className="shape shape--mint-rectangle" alt="Vector" />
      <img src={greenRing} className="shape shape--green-ring" alt="Vector" />*/}
      <MintTriangle />
      <GreenTriangle />
      <MintTrapezium />
      <PinkMoon />
      <MintRectangle />
      <GreenRing />
    </div>
  );
};

export default RightRight;
