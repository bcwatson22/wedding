import React from 'react';

import Column from './../Column';
import PeachTrapezium from './PeachTrapezium';
import PinkMoon from './PinkMoon';
import GreenTrapezium from './GreenTrapezium';
import GreenRectangle from './GreenRectangle';

const shapes = [
  {
    desc: 'peach-trapezium',
    box: '0.003 294 99.993 123.972',
    component: <PeachTrapezium />
  },
  {
    desc: 'pink-moon',
    box: '0 0 99.3 148.3',
    component: <PinkMoon />
  },
  {
    desc: 'green-trapezium',
    box: '0.003 8.306 99.993 371.538',
    component: <GreenTrapezium />
  },
  {
    desc: 'green-rectangle',
    box: '0.004 0 99.992 213.953',
    component: <GreenRectangle />
  }
]

const LeftLeft = () => {
  return (
    <Column position="ll" shapes={shapes} />
  );
};

export default LeftLeft;
