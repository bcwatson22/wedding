import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Link from './../Link';

const Instructions = ({ nicknames, greeting }) => {
  return (
    <>
      <h2>Now then {nicknames && `${nicknames}!`}</h2>
      {greeting && <p>{greeting}</p>}
      <p>Please fill in the form below to let us know if you can make it. If you could make sure you've sent your response by <strong>31st March 2021</strong> that'd be grand!</p>
      <p>The food in the day will all be vegetarian, so the <strong>Dietary requirements</strong> field below is more for allergies and intolerances.</p>
    </>
  );
};

const Thanks = ({ nicknames, date }) => {
  const today = moment(),
        submitted = moment(date),
        difference = today.diff(submitted, 'months');

  let string = `on ${moment(date).format('Do MMMM')}`;

  if (difference < 3) string = moment(date).fromNow();

  return (
    <>
      <h2>Thanks {nicknames && `${nicknames}!`}</h2>
      <p>We received your RSVP <strong>{string}</strong>.</p>
      <p>You can edit your response below, or please check out the <Link target="/info">Info</Link> and <Link target="/timings">Timings</Link> pages for more information about the big day.</p>
    </>
  );
};

const Greeting = ({ completed, personal }) => {
  const { nicknames, greeting } = personal;

  return (
    <>
      <h1>RSVP</h1>
      {completed
        ? <Thanks date={completed} nicknames={nicknames} />
        : <Instructions nicknames={nicknames} greeting={greeting} />}
    </>
  );
};

Greeting.propTypes = {
  completed: PropTypes.string,
  personal: PropTypes.object
}

export default Greeting;
