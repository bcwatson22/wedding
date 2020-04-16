import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as basicScroll from 'basicscroll';

import Utils from './../services/Utils';

import LeftLeft from './vectors/LeftLeft';
import LeftCentre from './vectors/LeftCentre';
import CentreCentre from './vectors/CentreCentre';
import RightCentre from './vectors/RightCentre';
import RightRight from './vectors/RightRight';

const initScroll = (wrapper) => {

  basicScroll.create({
    elem: wrapper,
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

}

const Background = ({ children, loaded }) => {
  const wrapper = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    if (loaded) setLoading(false);

    Utils.delay(1300).then(() => {

      // initScroll(wrapper.current);
      setScroll(true);

    });

  }, [loaded]);

  return (
    <div className={`background${loading ? ' loading' : ''}${scroll ? ' scroll' : ''}`} ref={wrapper}>
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
  children: PropTypes.node,
  hasData: PropTypes.bool
};

export default Background;
