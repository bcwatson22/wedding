import React from 'react';

import Column from './../Column';
import MintTriangle from './MintTriangle';
import GreenTriangle from './GreenTriangle';
import MintTrapezium from './MintTrapezium';
import PinkMoon from './PinkMoon';
import MintRectangle from './MintRectangle';
import GreenRing from './GreenRing';

const shapes = [
  {
    desc: 'mint-triangle',
    box: '0 0 100.004 263.998',
    component: <MintTriangle />
  },
  {
    desc: 'green-triangle',
    box: '-0.002 0 100.004 263.998',
    component: <GreenTriangle />
  },
  {
    desc: 'mint-trapezium',
    box: '0 0 100 199.5',
    component: <MintTrapezium />
  },
  {
    desc: 'pink-moon',
    box: '0 0 100 168.2',
    component: <PinkMoon />
  },
  {
    desc: 'mint-rectangle',
    box: '0.009 -0.406 99.994 245.463',
    component: <MintRectangle />
  },
  {
    desc: 'green-ring',
    box: '0.003 0 99.994 199.998',
    component: <GreenRing />,
    final: true
  }
]

const RightRight = () => {
  return (
    <Column position="rr" shapes={shapes} />
  );
};

export default RightRight;
