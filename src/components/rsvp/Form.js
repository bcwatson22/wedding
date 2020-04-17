import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import Guest from './Guest';

const Form = ({ guests }) => {
  const [responses, setResponses] = useState(guests);

  const scaffoldRsvp = (index) => {

    const existing = [...responses];

    if (!existing[index].responded) existing[index].responded = true;

    if (!existing[index].rsvp) existing[index].rsvp = { date: new Date().toISOString().split('T')[0] }

    return existing;

  }

  const handleRadio = (e, index) => {

    const existing = scaffoldRsvp(index);

    let attending = e.target.value === 'true';

    existing[index].rsvp.attending = attending;

    setResponses(existing);

  }

  const handleTextarea = (e, index) => {

    const existing = scaffoldRsvp(index);

    existing[index].rsvp[e.target.name] = e.target.value;

    setResponses(existing);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(responses);

  }

  return (
    <form onSubmit={handleSubmit}>
      {/*<Guest ref={guestsRef} guest={guests[0]} />*/}
      {/*{guests.map((guest, index) => <Guest ref={guestsRefs.current[index]} key={guest.name} guest={guest} />)}*/}
      {responses.map((response, index) => {
        return (
          <fieldset key={response.name}>
            <legend className="h2">{response.name}</legend>
            <div className="form-group">
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="true" onChange={(e) => handleRadio(e, index)} />
                <span className="form-input--radio__indicator"></span>
                Can't wait!
              </label>
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="false" onChange={(e) => handleRadio(e, index)} />
                <span className="form-input--radio__indicator"></span>
                Can't make it
              </label>
            </div>
            <label className="form-input form-input--textarea h3">
              Comments
              <textarea rows="2" name="comments" value={responses[index].rsvp && responses[index].rsvp.comments ? responses[index].rsvp.comments : ''} onChange={(e) => handleTextarea(e, index)}></textarea>
            </label>
            {responses[index].rsvp && responses[index].rsvp.attending &&
              <label className="form-input form-input--textarea h3">
                Dietary requirements
                <textarea rows="2" name="dietary" value={responses[index].rsvp && responses[index].rsvp.dietary ? responses[index].rsvp.dietary : ''} onChange={(e) => handleTextarea(e, index)}></textarea>
              </label>
            }
          </fieldset>
        );
      })}
      <button type="submit" className="button" disabled={responses.filter(guest => guest.responded).length === 0}>Submit</button>
    </form>
  );
};

Form.propTypes = {
  guests: PropTypes.array
}

export default Form;
