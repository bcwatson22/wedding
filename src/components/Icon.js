import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ file, folder, alt, classes }) => {
  const image = require(`./../assets/icons/${folder}/${file}.svg`);

  return (
    <span className={`icon${classes ? ' ' + classes : ''}`}>
      <img src={image} alt={alt ? alt + ' icon' : 'Icon'} />
    </span>
  );
};

Icon.propTypes = {
  file: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classes: PropTypes.string
};

export default Icon;
