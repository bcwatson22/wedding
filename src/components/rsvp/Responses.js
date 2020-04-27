import React from 'react';
import PropTypes from 'prop-types';

import tick from './../../assets/icons/responses/tick.svg';
import cross from './../../assets/icons/responses/cross.svg';

const True = () => {
  return (
    <img src={tick} alt="True" />
  );
};

const False = () => {
  return (
    <img src={cross} alt="True" />
  );
};

const Responses = ({ guests }) => {
  return (
    <>
      <h2>{guests.filter(guest => guest.rsvp.responded).length} responses out of {guests.length} respondees</h2>
      <article className="scrolling-table">
        <table>
          <thead>
            <tr>
              <th>Guests</th>
              <th>Responded</th>
              <th>Name</th>
              <th>Attending</th>
              <th>Comments</th>
              <th>Dietary</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <React.Fragment key={guest.personal.nicknames}>
                {guest.rsvp.responses.map((response, index) => (
                  <tr key={response.name}>
                    {index === 0 && <td rowSpan={guest.rsvp.responses.length}>{guest.personal.nicknames}</td>}
                    <td>{guest.rsvp.responded ? <True /> : <False />}</td>
                    <td>{response.name}</td>
                    <td>{response.attending === true && <True />}{response.attending === false && <False />}</td>
                    <td>{response.comments ? response.comments : '-'}</td>
                    <td>{response.dietary ? response.dietary : '-'}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};

Responses.propTypes = {
  guests: PropTypes.array
};

export default Responses;
