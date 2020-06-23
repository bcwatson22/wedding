import React from 'react';
import PropTypes from 'prop-types';

import { scrollTo, checkCurrentProp } from './../services/utils';

const Scroll = ({ children, target }) => {
  return (
    <button onClick={(e) => scrollTo(target)}>
      { children }
    </button>
  );
};

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.object
};

export default Scroll;
