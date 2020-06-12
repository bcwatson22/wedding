import React, { useRef, useEffect, useState, useContext } from 'react';
import * as basicScroll from 'basicscroll';

import LoadingContext from './../context/LoadingContext';
import { getHeight, setCssVar } from './../services/utils';

import LeftLeft from './vectors/ll/LeftLeft';
import LeftCentre from './vectors/lc/LeftCentre';
import CentreCentre from './vectors/cc/CentreCentre';
import RightCentre from './vectors/rc/RightCentre';
import RightRight from './vectors/rr/RightRight';

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

const Background = () => {
  const wrapper = useRef(null);
  const columns = useRef(null);
  const [scroll, setScroll] = useState(null);
  const { loadingCount, finishedLoading } = useContext(LoadingContext);

  useEffect(() => {

    if (finishedLoading) {

      if (scroll === null) {

        const full = getHeight(wrapper);
        const col = getHeight(columns);
        const ratio = full / col;

        if (ratio > 1.2) {

          // transform: translateY(calc(var(--scroll) * calc(var(--factor) * calc(var(--ratio) * calc(var(--columns) / 3.5 * 0.1rem)))));

          setCssVar(wrapper, '--background', full);
          setCssVar(wrapper, '--columns', col);
          setCssVar(wrapper, '--ratio', ratio);

          initScroll(wrapper.current);
          setScroll(true);

        }

      }

    }

  }, [finishedLoading, scroll]);

  return (
    <div className={`background${loadingCount > 0 ? ' loading' : ''}${scroll ? ' scroll' : ''}`} ref={wrapper}>
      <LeftLeft ref={columns} />
      <LeftCentre />
      <CentreCentre />
      <RightCentre />
      <RightRight />
    </div>
  );
};

export default Background;
