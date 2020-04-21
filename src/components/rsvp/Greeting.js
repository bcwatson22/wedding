import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
  return (
    <>
      <h2>Thanks {nicknames && `${nicknames}!`}</h2>
      <p>We received your RSVP on {date}.</p>
      <p>You can edit your response below, or please check out the Info and Timings pages for more information about the big day.</p>
    </>
  );
};

const Guest = ({ completed, personal }) => {
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

const Greeting = (props, ref) => {
  return (
    <div ref={ref}>
      {props.personal.nicknames ? <Guest completed={props.completed} personal={props.personal} /> : <Gatecrasher />}
    </div>
  );
};

Guest.propTypes = {
  completed: PropTypes.string,
  personal: PropTypes.object
}

export default forwardRef(Greeting);
