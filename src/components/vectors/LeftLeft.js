import React from 'react';

import PeachTrapezium from './ll/PeachTrapezium';
import PinkMoon from './ll/PinkMoon';
import GreenTrapezium from './ll/GreenTrapezium';
import GreenRectangle from './ll/GreenRectangle';

const LeftLeft = () => {
  return (
    <div className="column column--ll">
      <PeachTrapezium />
      <PinkMoon />
      <GreenTrapezium />
      <GreenRectangle />
    </div>
  );
};

export default LeftLeft;
