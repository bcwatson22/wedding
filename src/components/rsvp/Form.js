import React, { useEffect, useState, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Utils from './../../services/Utils';

// import Guest from './Guest';

const updateGuestResponseMutation = gql`
  mutation updateGuestResponse($shortId: String!, $responses: [GuestResponsesUpdateInput]!) {
    updateOneGuest(
      query: { shortId: $shortId }
      set: { responses: $responses }
    ) {
      responses {
        name
        responded
        rsvp {
          attending
          date
          dietary
          comments
        }
      }
    }
  }
`

const Form = ({ shortId, guests }) => {
  const fieldRefs = useRef(guests.map(() => createRef()));
  const [responses, setResponses] = useState(guests);
  const [updateGuestResponses] = useMutation(updateGuestResponseMutation);

  useEffect(() => {

    fieldRefs.current.map((field, i) => Utils.setHeightVar(field.current, field.current, '--height'));

  }, []);

  const scaffoldRsvp = (i) => {

    const existing = [...responses];

    if (!existing[i].responded) existing[i].responded = true;

    if (!existing[i].rsvp) existing[i].rsvp = { date: new Date().toISOString().split('T')[0] }

    return existing;

  }

  const handleRadio = (e, i) => {

    const existing = scaffoldRsvp(i);

    let attending = e.target.value === 'true';

    existing[i].rsvp.attending = attending;

    setResponses(existing);

  }

  const handleTextarea = (e, i) => {

    const existing = scaffoldRsvp(i);

    existing[i].rsvp[e.target.name] = e.target.value;

    setResponses(existing);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const cleanedResponses = JSON.parse(JSON.stringify(responses));

    cleanedResponses.map((response) => (
      delete response.__typename
    ));

    // console.log(cleanedResponses);

    updateGuestResponses({
      variables: { shortId: shortId, responses: cleanedResponses }
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {/*<Guest ref={guestsRef} guest={guests[0]} />*/}
      {/*{guests.map((guest, i) => <Guest ref={guestsRefs.current[i]} key={guest.name} guest={guest} />)}*/}
      {responses.map((response, i) => {
        return (
          <fieldset key={response.name}>
            <legend className="h2">{response.name}</legend>
            <div className="form-group">
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="true" onChange={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't wait!
              </label>
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="false" onChange={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't make it
              </label>
            </div>
            <label className="form-input form-input--textarea h3">
              Comments
              <textarea rows="2" name="comments" value={responses[i].rsvp && responses[i].rsvp.comments ? responses[i].rsvp.comments : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
            <label className={`form-input form-input--textarea h3${responses[i].rsvp && responses[i].rsvp.attending ? ' form-input--shown' : ' form-input--hidden'}`} ref={fieldRefs.current[i]}>
              Dietary requirements
              <textarea rows="2" name="dietary" value={responses[i].rsvp && responses[i].rsvp.dietary ? responses[i].rsvp.dietary : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
          </fieldset>
        );
      })}
      <button type="submit" className="button" disabled={responses.filter(guest => guest.responded).length !== guests.length}>Submit</button>
    </form>
  );
};

Form.propTypes = {
  shortId: PropTypes.string,
  guests: PropTypes.array
}

export default Form;
