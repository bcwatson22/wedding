import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import LoadingContext from './../context/LoadingContext';
import RoutingContext from './../context/RoutingContext';

import { delay } from './../services/utils';

const Link = ({children, target}) => {
  const { showLoading } = useContext(LoadingContext);
  const { showRouting } = useContext(RoutingContext);

  const navigateTo = (e) => {

    e.preventDefault();

    const elem = (e.target.localName === 'a') ? e.target : e.target.parentElement;
    const location = elem.getAttribute('href');
    let pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    if (pathname.length > 1) pathname = window.location.pathname.replace(/\/$/, '');

    if (location !== pathname) {

      showLoading();
      showRouting();

      delay(200).then(() => navigate(location));

    }

  }

  return (
    <a href={target} className="button button--text" onClick={navigateTo}>
      { children }
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node
};

export default Link;
