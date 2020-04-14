import React from 'react';

import PeachMoon from './lc/PeachMoon';
import PeachRectangle from './lc/PeachRectangle';
import PeachTriangle from './lc/PeachTriangle';
import MintTriangle from './lc/MintTriangle';

const LeftCentre = () => {
  return (
    <div className="column column--lc">
      <PeachMoon />
      <PeachRectangle />
      <PeachTriangle />
      <MintTriangle />
    </div>
  );
};

export default LeftCentre;
