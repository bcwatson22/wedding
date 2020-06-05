import React from 'react';

import Column from './../Column';
import PeachMoon from './PeachMoon';
import PeachRectangle from './PeachRectangle';
import PeachTriangle from './PeachTriangle';
import MintTriangle from './MintTriangle';

const shapes = [
  {
    desc: 'peach-moon',
    box: '0.224 0 99.776 148.511',
    component: <PeachMoon />
  },
  {
    desc: 'peach-rectangle',
    box: '0 0 100 214',
    component: <PeachRectangle />
  },
  {
    desc: 'peach-triangle',
    box: '0 0 100 172.932',
    component: <PeachTriangle />
  },
  {
    desc: 'mint-triangle',
    box: '0.016 0 99.968 263.951',
    component: <MintTriangle />
  }
]

const LeftCentre = () => {
  return (
    <Column position="lc" shapes={shapes} />
  );
};

export default LeftCentre;
