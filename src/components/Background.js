import React, { useRef, useEffect, useContext } from 'react';
import * as basicScroll from 'basicscroll';

import LoadingContext from './../context/LoadingContext';

import LeftLeft from './vectors/ll/LeftLeft';
import LeftCentre from './vectors/lc/LeftCentre';
import CentreCentre from './vectors/cc/CentreCentre';
import RightCentre from './vectors/rc/RightCentre';
import RightRight from './vectors/rr/RightRight';

const initScroll = (wrapper) => {

  basicScroll.create({
    elem: wrapper,
    from: 'top-top',
    to: 'middle-top',
    direct: true,
    props: {
      '--scroll': {
        from: 0.00001,
        to: 0.99999
      }
    }
  }).start();

}

const Background = () => {
  const wrapper = useRef(null);
  const { loadingCount, finishedLoading } = useContext(LoadingContext);

  useEffect(() => {

    if (finishedLoading) initScroll(wrapper.current);

  }, [finishedLoading]);

  return (
    <aside>
      <div className={`background${loadingCount > 0 ? ' loading' : ''}`} ref={wrapper}>
        <LeftLeft />
        <LeftCentre />
        <CentreCentre />
        <RightCentre />
        <RightRight />
      </div>
    </aside>
  );
};

export default Background;
