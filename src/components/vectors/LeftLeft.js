import React from 'react';

// import peachTrapezium from './../../assets/patterns/ll/peach-trapezium.svg';
// import pinkMoon from './../../assets/patterns/ll/pink-moon.svg';
// import greenTrapezium from './../../assets/patterns/ll/green-trapezium.svg';
// import greenRectangle from './../../assets/patterns/ll/green-rectangle.svg';

import PeachTrapezium from './ll/PeachTrapezium';
import PinkMoon from './ll/PinkMoon';
import GreenTrapezium from './ll/GreenTrapezium';
import GreenRectangle from './ll/GreenRectangle';

const LeftLeft = () => {
  return (
    <div className="column column--ll">
      {/*<img src={peachTrapezium} className="shape shape--peach-trapezium" alt="Vector" />
      <img src={pinkMoon} className="shape shape--pink-moon" alt="Vector" />
      <img src={greenTrapezium} className="shape shape--green-trapezium" alt="Vector" />
      <img src={greenRectangle} className="shape shape--green-rectangle" alt="Vector" />*/}
      <PeachTrapezium />
      <PinkMoon />
      <GreenTrapezium />
      <GreenRectangle />
    </div>
  );
};

export default LeftLeft;
