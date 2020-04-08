import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as basicScroll from 'basicscroll';

import LeftLeft from './vectors/LeftLeft';
import LeftCentre from './vectors/LeftCentre';
import CentreCentre from './vectors/CentreCentre';
import RightCentre from './vectors/RightCentre';
import RightRight from './vectors/RightRight';

const Background = ({children}) => {
  const wrapper = useRef(null);

  useEffect(() => {

    basicScroll.create({
      elem: wrapper.current,
      from: 'top-top',
      to: 'bottom-bottom',
      direct: true,
      props: {
        '--scroll': {
          from: 0.0001,
          to: 0.9999
        }
      }
    }).start();

  });

  return (
    <div className="background" ref={wrapper}>
      <LeftLeft />
      <LeftCentre />
      <CentreCentre />
      <RightCentre />
      <RightRight />
      { children }
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node
};

export default Background;
