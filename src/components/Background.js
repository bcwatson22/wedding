import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as basicScroll from 'basicscroll';

import LoadingContext from './../context/LoadingContext';
import { setHeightVar } from './../services/utils';

// import LeftLeft from './vectors/LeftLeft';
// import LeftCentre from './vectors/LeftCentre';
// import CentreCentre from './vectors/CentreCentre';
// import RightCentre from './vectors/RightCentre';
// import RightRight from './vectors/RightRight';

import ll from './../assets/vectors/ll.svg';
import lc from './../assets/vectors/lc.svg';
import cc from './../assets/vectors/cc.svg';
import rc from './../assets/vectors/rc.svg';
import rr from './../assets/vectors/rr.svg';

const initScroll = (wrapper) => {

  basicScroll.create({
    elem: wrapper,
    from: 'top-top',
    to: 'bottom-bottom',
    direct: true,
    props: {
      '--scroll': {
        from: 0.00001,
        to: 0.99999
      }
    }
  }).start();

}

const Background = ({ children }) => {
  const wrapper = useRef(null);
  const [scroll, setScroll] = useState(null);
  const { loadingCount, finishedLoading } = useContext(LoadingContext);

  useEffect(() => {

    if (finishedLoading) {

      if (scroll === null) {

        initScroll(wrapper.current);
        setScroll(true);

      }

      setHeightVar(wrapper.current, wrapper.current, '--background');

    }

  }, [finishedLoading, scroll]);

  return (
    <div className={`background${loadingCount > 0 ? ' loading' : ''}${scroll ? ' scroll' : ''}`} ref={wrapper}>
      <div className="background__column">
        <img src={ll} className="background__pattern" alt="Background pattern" />
      </div>
      <div className="background__column">
        <img src={lc} className="background__pattern" alt="Background pattern" />
      </div>
      <div className="background__column">
        <img src={cc} className="background__pattern" alt="Background pattern" />
      </div>
      <div className="background__column">
        <img src={rc} className="background__pattern" alt="Background pattern" />
      </div>
      <div className="background__column">
        <img src={rr} className="background__pattern" alt="Background pattern" />
      </div>
      { children }
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node
};

export default Background;
