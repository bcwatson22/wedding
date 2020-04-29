import React, { useEffect, useState, useRef, createRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import moment from 'moment';

import LoadingContext from './../../context/LoadingContext';

import { setHeightVar } from './../../services/utils';

const updateGuestRsvpMutation = gql`
  mutation updateGuestRsvp($rsvpId: Int!, $date: String, $responded: Boolean!, $responses: GuestResponseUpdateManyInput!) {
    updateGuestRsvp(
      where: { id: $rsvpId },
      data: { date: $date, responded: $responded, responses: $responses }
    ) {
      responded,
      date,
      responses {
        name,
        attending,
        comments,
        dietary
      }
    }
  }
`;

const Form = ({ rsvpId, guests, setStatus }) => {
  const fieldRefs = useRef(guests.map(() => createRef()));
  const [completedResponses, setCompletedResponses] = useState(guests);
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const [updateGuestResponses] = useMutation(updateGuestRsvpMutation, {
    onCompleted(result) {
      hideLoading();
      setStatus(result.updateGuestRsvp.date);
    },
    onError() {
      hideLoading();
    }
  });

  useEffect(() => {

    fieldRefs.current.map((field, i) => setHeightVar(field.current, field.current, '--height'));

  }, []);

  const handleRadio = (e, i) => {

    const existing = [...completedResponses];

    let attending = e.target.value === 'true';

    existing[i].attending = attending;

    setCompletedResponses(existing);

  }

  const handleTextarea = (e, i) => {

    const existing = [...completedResponses];

    existing[i][e.target.name] = e.target.value;

    setCompletedResponses(existing);

  }

  const formatResponses = () => {

    const responseArray = [];

    completedResponses.forEach((response) => {

      const { id, __typename, ...cleaned } = response;

      responseArray.push(
        {
          where: {
            id: response.id
          },
          data: cleaned
        }
      );

    });

    return responseArray;

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    showLoading();

    const formattedResponses = formatResponses();
    const responseObject = { updateMany: formattedResponses };

    updateGuestResponses({
      variables: {
        rsvpId: rsvpId,
        responded: true,
        date: moment(),
        responses: responseObject
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
                <input type="radio" name={`attendance${response.name}`} value="true" defaultChecked={response.attending === true} onClick={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't wait!
              </label>
              <label className="form-input form-input--radio h3">
                <input type="radio" name={`attendance${response.name}`} value="false" defaultChecked={response.attending === false} onClick={(e) => handleRadio(e, i)} />
                <span className="form-input--radio__indicator"></span>
                Can't make it
              </label>
            </div>
            <label className="form-input form-input--textarea h3">
              Comments
              <textarea rows="2" name="comments" value={completedResponses[i].comments ? completedResponses[i].comments : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
            <label className={`form-input form-input--textarea h3${completedResponses[i].attending ? ' form-input--shown' : ' form-input--hidden'}`} ref={fieldRefs.current[i]}>
              Dietary requirements
              <textarea rows="2" name="dietary" value={completedResponses[i].dietary ? completedResponses[i].dietary : ''} onChange={(e) => handleTextarea(e, i)}></textarea>
            </label>
          </fieldset>
        );
      })}
      <button type="submit" className="button button--block" disabled={completedResponses.filter(guest => guest.attending !== null).length !== guests.length}>Submit</button>
    </form>
  );
};

Form.propTypes = {
  rsvpId: PropTypes.number,
  guests: PropTypes.array,
  setStatus: PropTypes.func
}

export default Form;
