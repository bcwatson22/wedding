import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ data }) => {
  const { nicknames, greeting } = data;

  return (
    <div>
      <h1>RSVP</h1>
      <h2>Now then {nicknames && `${nicknames}!`}</h2>
      <p>Please fill in the form below to let us know if you can make it. If you could make sure you've sent your response by <strong>31st March 2021</strong> that'd be grand!</p>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

Greeting.propTypes = {
  data: PropTypes.object
}

export default Greeting;
