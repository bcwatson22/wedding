import React from 'react';

import Column from './../Column';
import PeachTrapezium from './PeachTrapezium';
import GreenTriangle from './GreenTriangle';
import MintTrapezium from './MintTrapezium';
import PinkMoon from './PinkMoon';

const shapes = [
  {
    desc: 'peach-trapezium',
    box: '0.004 0 99.992 495.51',
    component: <PeachTrapezium />
  },
  {
    desc: 'green-triangle',
    box: '0.015 0 99.969 263.953',
    component: <GreenTriangle />
  },
  {
    desc: 'mint-trapezium',
    box: '0 0 100 214',
    component: <MintTrapezium />
  },
  {
    desc: 'pink-moon',
    box: '0 0 100 179.9',
    component: <PinkMoon />
  }
]

const CentreCentre = () => {
  return (
    <Column position="cc" shapes={shapes} />
  );
};

export default CentreCentre;
