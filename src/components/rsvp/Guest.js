import React, { useEffect, useState, forwardRef } from 'react';
// import PropTypes from 'prop-types';

import { useRadio } from './../../hooks/useRadio';
import { useTextarea } from './../../hooks/useTextarea';

const Guest = (props, ref) => {
  const [guest, setGuest] = useState({
    name: props.guest.name,
    rsvp: {
      date: new Date().toISOString().split('T')[0],
      attending: null,
      dietary: '',
      comments: ''
    }
  });

  // const { value: attending, bind: bindAttending, reset: resetAttending } = useRadio('attending');

  const [attending, attendingProps] = useRadio('attending');
  const [comments, commentsProps] = useTextarea('comments');
  const [dietary, dietaryProps] = useTextarea('dietary');

  useEffect(() => {

    setGuest({
      name: props.guest.name,
      rsvp: {
        date: new Date().toISOString().split('T')[0],
        attending: attending,
        comments: comments,
        dietary: dietary
      }
    });

    console.log(guest);

  }, [attending, comments, dietary]);

  return (
    <fieldset>
      <legend className="h2">{props.guest.name}</legend>
      <div className="form-group">
        <label className="form-input form-input--radio h3">
          <input value="true" checked={attending === 'true'} {...attendingProps} />
          <span className="form-input--radio__indicator"></span>
          Can't wait!
        </label>
        <label className="form-input form-input--radio h3">
          <input value="false" checked={attending === 'false'} {...attendingProps} />
          <span className="form-input--radio__indicator"></span>
          Can't make it
        </label>
      </div>
      <label className="form-input form-input--textarea h3">
        Comments
        <textarea {...commentsProps}></textarea>
      </label>
      <label className="form-input form-input--textarea h3">
        Dietary requirements
        <textarea {...dietaryProps}></textarea>
      </label>
    </fieldset>
  );
};

export default forwardRef(Guest);
