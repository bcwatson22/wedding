import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <>
      <h2>Bollocks. Something's gone wrong</h2>
      <p>Unfortunately it appears the server has either lost its shit or spat its dummy out pram. Please try again!</p>
      <p><pre>{JSON.stringify(error)}</pre></p>
    </>
  );
};

Error.propTypes = {
  error: PropTypes.node
};

export default Error;
