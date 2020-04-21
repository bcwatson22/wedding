import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import LoadingContext from './../context/LoadingContext';

import Utils from './../services/Utils';

const Link = ({children, target}) => {
  const {showLoading} = useContext(LoadingContext);

  const navigateTo = (e) => {

    e.preventDefault();

    const elem = (e.target.localName === 'a') ? e.target : e.target.parentElement,
          location = elem.getAttribute('href');

    showLoading();

    Utils.delay(200).then(() => navigate(location));

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
