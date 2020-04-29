import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as basicScroll from 'basicscroll';

import LoadingContext from './../context/LoadingContext';
import { delay } from './../services/utils';

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

const Background = ({ children }) => {
  const wrapper = useRef(null);
  const [scroll, setScroll] = useState(false);
  const { loadingCount } = useContext(LoadingContext);

  useEffect(() => {

    delay(1300).then(() => {

      // initScroll(wrapper.current);
      // setScroll(true);

    });

  }, []);

  return (
    <div className={`background${loadingCount > 0 ? ' loading' : ''}${scroll ? ' scroll' : ''}`} ref={wrapper}>
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
  children: PropTypes.node.isRequired
};

export default Background;
