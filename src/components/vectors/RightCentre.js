import React from 'react';

import PeachTriangle from './rc/PeachTriangle';
import MintRing from './rc/MintRing';
import PinkMoon from './rc/PinkMoon';
import PeachTrapezium from './rc/PeachTrapezium';
import GreenTriangle from './rc/GreenTriangle';

const RightCentre = () => {
  return (
    <div className="column column--rc">
      <PeachTriangle />
      <MintRing />
      <PinkMoon />
      <PeachTrapezium />
      <GreenTriangle />
    </div>
  );
};

export default RightCentre;
