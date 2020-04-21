import React, { useEffect, useState, useRef, createRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment';

import LoadingContext from './../../context/LoadingContext';

import Utils from './../../services/Utils';

const updateGuestResponseMutation = gql`
  mutation updateGuestResponse($shortId: String!, $response: GuestResponseUpdateInput!, $responses: [GuestResponsesUpdateInput]!) {
    updateOneGuest(
      query: { shortId: $shortId }
      set: { response: $response, responses: $responses }
    ) {
      response {
        date
      }
    }
  }
`

const Form = ({ shortId, guests, setStatus }) => {
  const fieldRefs = useRef(guests.map(() => createRef()));
  const [completedResponses, setCompletedResponses] = useState(guests);
  const {showLoading, hideLoading} = useContext(LoadingContext);

  const [updateGuestResponses] = useMutation(updateGuestResponseMutation, {
    onCompleted(result) {
      console.log(result);
      hideLoading();
      setStatus(result.updateOneGuest.response.date);
    }
  });

  useEffect(() => {

    fieldRefs.current.map((field, i) => Utils.setHeightVar(field.current, field.current, '--height'));

  }, []);

  const scaffoldRsvp = (i) => {

    const existing = [...completedResponses];

    if (!existing[i].rsvp) existing[i].rsvp = {}

    return existing;

  }

  const handleRadio = (e, i) => {

    const existing = scaffoldRsvp(i);

    let attending = e.target.value === 'true';

    existing[i].rsvp.attending = attending;

    setCompletedResponses(existing);

  }

  const handleTextarea = (e, i) => {

    const existing = scaffoldRsvp(i);

    existing[i].rsvp[e.target.name] = e.target.value;

    setCompletedResponses(existing);

  }

  const cleanResponses = () => {

    const copiedResponses = JSON.parse(JSON.stringify(completedResponses));

    copiedResponses.forEach((response) => {
      delete response.__typename;
      delete response.rsvp.__typename;
    });

    return copiedResponses;

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    showLoading();

    const cleanedResponses = cleanResponses();

    updateGuestResponses({
      variables: {
        shortId: shortId,
        response: {
          responded: true,
          date: moment()
        },
        responses: cleanedResponses
      }
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {completedResponses.map((response, i) => {
        return (
          <fieldset key={response.name}>
            <legend className="h2">{response.name}</legend>
            <div className="form-group">
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="true" defaultChecked={response.rsvp && response.rsvp.attending} onClick={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't wait!
              </label>
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="false" defaultChecked={response.rsvp && !response.rsvp.attending} onClick={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't make it
              </label>
            </div>
            <label className="form-input form-input--textarea h3">
              Comments
              <textarea rows="2" name="comments" value={completedResponses[i].rsvp && completedResponses[i].rsvp.comments ? completedResponses[i].rsvp.comments : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
            <label className={`form-input form-input--textarea h3${completedResponses[i].rsvp && completedResponses[i].rsvp.attending ? ' form-input--shown' : ' form-input--hidden'}`} ref={fieldRefs.current[i]}>
              Dietary requirements
              <textarea rows="2" name="dietary" value={completedResponses[i].rsvp && completedResponses[i].rsvp.dietary ? completedResponses[i].rsvp.dietary : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
          </fieldset>
        );
      })}
      <button type="submit" className="button button--block" disabled={completedResponses.filter(guest => guest.rsvp).length !== guests.length}>Submit</button>
    </form>
  );
};

Form.propTypes = {
  shortId: PropTypes.string,
  guests: PropTypes.array,
  setStatus: PropTypes.func
}

export default Form;
