import React from 'react';
import PropTypes from 'prop-types';

const GreetGuest = ({ data }) => {
  const { nicknames, greeting } = data;

  return (
    <>
      <h1>RSVP</h1>
      <h2>Now then {nicknames && `${nicknames}!`}</h2>
      <p>Please fill in the form below to let us know if you can make it. If you could make sure you've sent your response by <strong>31st March 2021</strong> that'd be grand!</p>
      <p>The food in the day will all be vegetarian, so the <strong>Dietary</strong> field below is more for allergies and intolerances.</p>
      {greeting && <p>{greeting}</p>}
    </>
  );
};

const Gatecrasher = () => {
  return (
    <>
      <h1>RSVP</h1>
      <h2>Now then gatecrasher!</h2>
      <p>Only joking. But we need you to have clicked the link in your email to be able to tell who you are and to store your response.</p>
      <p>Either you didn't come here via the link, or something fishy is going on!</p>
      <p>Please try again.</p>
    </>
  );
};

const Greeting = ({ data }) => {
  return (
    <>
      {data.nicknames ? <GreetGuest data={data} /> : <Gatecrasher />}
    </>
  );
};

Greeting.propTypes = {
  data: PropTypes.object
}

export default Greeting;
