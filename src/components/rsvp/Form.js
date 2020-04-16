import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
//
// const ids = {
//   arch: '9yLbQgnkE',
//   festa: 'zUIDbD5x6M',
//   tay: 'FdnRvyCAFp',
//   tys: '1GNpq5bcLH'
// }

// const guestGreetingQuery = (shortId) => gql`
//   query GuestGreeting {
//     guest(query: { shortId: "${shortId}" }) {
//       personal {
//         nicknames
//         greeting
//       }
//     }
//   }
// `

const Form = () => {
  // const { loading, error, data } = useQuery(guestGreetingQuery(ids.tys));

  return (
    <form>
      <fieldset>
        <legend className="h2">Archie</legend>
        <label className="form-input form-input--radio">
          Can't wait!
          <input type="radio" name="attendance" checked />
          <span className="form-input--radio__indicator"></span>
        </label>
        <label className="form-input form-input--radio">
          Can't make it
          <input type="radio" name="attendance" />
          <span className="form-input--radio__indicator"></span>
        </label>
        <label className="form-input form-input--textarea">
          Dietary
          <textarea rows="3" name="textarea"></textarea>
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
