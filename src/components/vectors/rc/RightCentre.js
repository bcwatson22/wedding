import React from 'react';

import Column from './../Column';
import PeachTriangle from './PeachTriangle';
import MintRing from './MintRing';
import PinkMoon from './PinkMoon';
import PeachTrapezium from './PeachTrapezium';
import GreenTriangle from './GreenTriangle';

const shapes = [
  {
    desc: 'peach-triangle',
    box: '-0.002 0 100.004 263.998',
    component: <PeachTriangle />
  },
  {
    desc: 'mint-ring',
    box: '0 0 100 214',
    component: <MintRing />
  },
  {
    desc: 'pink-moon',
    box: '0 0 100 179.9',
    component: <PinkMoon />
  },
  {
    desc: 'peach-trapezium',
    box: '-0.001 0 100.004 68.994',
    component: <PeachTrapezium />
  },
  {
    desc: 'green-triangle',
    box: '0 0 100 264',
    component: <GreenTriangle />
  }
]

const RightCentre = () => {
  return (
    <Column position="rc" shapes={shapes} />
  );
};

export default RightCentre;
