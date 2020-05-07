import React from 'react';
import PropTypes from 'prop-types';

import Icon from './../Icon';

const Heading = ({ title }) => {
  return (
    <h2 className="heading--icon"><Icon file={title.toLowerCase().replace(/\s/g , '-')} folder="info" alt={title} />{title}</h2>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired
};

export default Heading;
