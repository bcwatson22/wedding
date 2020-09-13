import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Link from './../Link';

const Instructions = ({ nicknames, greeting }) => {
  const deadline = '2021-03-31';

  return (
    <>
      <h2>Now then {nicknames && `${nicknames}`}</h2>
      {greeting && <p>{greeting}</p>}
      <p>Please fill in the form below to let us know if you can make it. If you could ensure you've sent your response by <time dateTime={deadline}><strong>{moment(deadline).format('Do MMMM YYYY')}</strong></time> that'd be grand!</p>
      <p>The food in the day will all be vegetarian, so the <strong>Dietary requirements</strong> field below is more for allergies and intolerances.</p>
      <p>We'd also love for you to <strong>join us the next day</strong> to continue the celebrations. Numbers are limited by the venue, so we're allocating time slots to our nearest and dearest. Let us know if you'd like to come along!</p>
      <p>As much as we'd love to invite all of our friend's kids, we can <strong>only accommodate children from close family</strong>. We hope you can enjoy the chance to let your hair down and have a night off!</p>
    </>
  );
};

const Thanks = ({ nicknames, date }) => {
  const today = moment();
  const submitted = moment(date);
  const difference = today.diff(submitted, 'months');

  let string = `on ${moment(date).format('Do MMMM')}`;

  if (difference < 3) string = moment(date).fromNow();

  return (
    <>
      <h2>Thanks {nicknames && `${nicknames}`}</h2>
      <p>We received your RSVP <time dateTime={date}><strong>{string}</strong></time>.</p>
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
  personal: PropTypes.object.isRequired
}

export default Greeting;
