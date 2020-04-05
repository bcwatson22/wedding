import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children}) => {
  return (
    <div className="inner">
      <div class="patterns">
        { children }
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
