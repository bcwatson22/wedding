import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import LoadingContext from './../../context/LoadingContext';

import Link from './../Link';
import Scroll from './../Scroll';

import { cleanResponse } from './../../services/utils';

import tick from './../../assets/icons/responses/tick.svg';
import cross from './../../assets/icons/responses/cross.svg';

const True = () => {
  return (
    <img src={tick} alt="" />
  );
};

const False = () => {
  return (
    <img src={cross} alt="" />
  );
};

const Responses = ({ guests }) => {
  const totals = useRef(null);
  const { hideLoading } = useContext(LoadingContext);
  const total = guests.map(guest => guest.rsvp.responses.map(response => cleanResponse(response))).flat();
  const invited = total.length;
  const attending = total.filter(response => response.attending === true).length;
  const comments = total.filter(response => response.comments).length;
  const dietary = total.filter(response => response.dietary).length;
  const responded = guests.filter(guest => guest.rsvp.responded).length;
  const respondees = guests.length;
  const percentage = (responded / respondees) * 100;

  useEffect(() => {

    hideLoading();

  }, [hideLoading]);

  return (
    <>
      <h2><Scroll target={totals}>{percentage}% ({responded} responses out of {respondees} respondees)</Scroll></h2>
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
                    {index === 0 && <td rowSpan={guest.rsvp.responses.length}><Link target={`/rsvp/${guest.id}`}>{guest.personal.nicknames}</Link></td>}
                    <td>{guest.rsvp.responded ? <True /> : <False />}</td>
                    <td>{response.name}</td>
                    <td>{response.attending === true && <True />}{response.attending === false && <False />}</td>
                    <td>{response.comments ? response.comments : '-'}</td>
                    <td>{response.dietary ? response.dietary : '-'}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr ref={totals}>
              <th>Total guests</th>
              <th>Responded</th>
              <th>Name</th>
              <th>Attending</th>
              <th>Comments</th>
              <th>Dietary</th>
            </tr>
            <tr>
              <td><strong>{respondees}</strong></td>
              <td className="central"><strong>{responded}</strong></td>
              <td className="central"><strong>{invited}</strong></td>
              <td className="central"><strong>{attending}</strong></td>
              <td><strong>{comments}</strong></td>
              <td><strong>{dietary}</strong></td>
            </tr>
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
