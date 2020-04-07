import React from 'react';
import PropTypes from 'prop-types';

const Background = ({children}) => {
  return (
    <div className="inner">
      { children }
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node
};

export default Background;
