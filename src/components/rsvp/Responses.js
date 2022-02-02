import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingContext from './../../context/LoadingContext';

import Link from './../Link';
import Scroll from './../Scroll';

import { cleanResponse } from './../../services/utils';

import tick from './../../assets/icons/responses/tick.svg';
import cross from './../../assets/icons/responses/cross.svg';

const resetGuestRsvpMutation = gql`
  mutation resetGuestRsvp(
    $rsvpId: Int,
    $date: String,
    $responded: Boolean!
    $responseId: Int,
    $attending: Boolean,
    $dietary: String,
    $comments: String
  ) {
    updateManyGuestRsvps(
      where: { id: $rsvpId }
      data: { date: $date, responded: $responded }
    ) {
      count
    }
    updateManyGuestResponses(
      where: { id: $responseId }
      data: { attending: $attending, dietary: $dietary, comments: $comments }
    ) {
      count
    }
  }
`;

const True = () => (
  <img src={tick} alt="" />
);

const False = () => (
  <img src={cross} alt="" />
);

const Responses = ({ guests, refetch }) => {
  const totals = useRef(null);
  const { hideLoading, showLoading } = useContext(LoadingContext);

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

  const [updateGuestResponse] = useMutation(resetGuestRsvpMutation, {
    onCompleted(result) {
      hideLoading();
      refetch();
    },
    onError() {
      hideLoading();
    }
  });

  const handleReset = (e, rsvpId, responseId) => {

    e.preventDefault();

    showLoading();

    // console.log(`rsvp = ${rsvpId}, response = ${responseId}`)

    // const formattedResponses = formatResponses();
    // const responseObject = { updateMany: formattedResponses };

    updateGuestResponse({
      variables: {
        "rsvpId": rsvpId,
        "responseId": responseId,
        "date": null,
        "responded": false,
        "attending": null,
        "comments": null,
        "dietary": null
      }
    })

  }

  return (
    <>
      <h2><Scroll target={totals.current}>{percentage}% ({responded} responses out of {respondees} respondees)</Scroll></h2>
      <article className="table--scrolling">
        <table>
          <thead>
            <tr>
              <th>Guests</th>
              <th>Responded</th>
              <th>Name</th>
              <th>Attending</th>
              <th>Comments</th>
              <th colSpan="2">Dietary</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <React.Fragment key={guest.personal.nicknames}>
                {guest.rsvp.responses.map((response, index) => (
                  <tr key={response.name}>
                    {index === 0 && <td rowSpan={guest.rsvp.responses.length}><Link target={`/rsvp/${guest.id}`}>{guest.personal.nicknames}</Link></td>}
                    <td>{guest.rsvp.responded ? <True /> : <False />} </td>
                    <td>{response.name}</td>
                    <td>{response.attending === true && <True />}{response.attending === false && <False />}</td>
                    <td>{response.comments ? response.comments : '-'}</td>
                    <td>{response.dietary ? response.dietary : '-'}</td>
                    <td>{guest.rsvp.responded && <button className="button button--text" onClick={(e) => handleReset(e, guest.rsvp.id, response.id)}>Reset</button>}</td>
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
              <th colSpan="2">Dietary</th>
            </tr>
            <tr>
              <td><strong>{respondees}</strong></td>
              <td className="central"><strong>{responded}</strong></td>
              <td className="central"><strong>{invited}</strong></td>
              <td className="central"><strong>{attending}</strong></td>
              <td><strong>{comments}</strong></td>
              <td colSpan="2"><strong>{dietary}</strong></td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

Responses.propTypes = {
  guests: PropTypes.array.isRequired
};

export default Responses;
