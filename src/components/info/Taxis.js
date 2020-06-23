import React from 'react';

import moment from 'moment';

const taxiCompanies = [
  {
    name: 'Ashbourne Taxis',
    phone: '01335 345198'
  },
  {
    name: 'Dovelin Cars and Minibus',
    phone: '07974 665439'
  },
  {
    name: 'Star Cars',
    phone: '01538 266343'
  },
  {
    name: 'ACT Taxis',
    phone: '01335 343928'
  },
  {
    name: 'Village Taxis of Ashbourne',
    phone: '01335 418080'
  },
  {
    name: 'Peak Cars',
    phone: '01335 370937'
  }
];

const Taxis = () => {
  const curfew = '2021-05-29T23:30:00';

  return (
    <>
      <p>Our wedding venue is in the countryside, please make sure to <strong>book taxis in advance</strong> to guarantee a ride to your accomodation. Music will <strong>finish at <time dateTime={curfew}>{moment(curfew).format('h:mma')}</time></strong>, and all guests must be off site by midnight.</p>
      <article className="table--scrolling">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {taxiCompanies.map((company) => {
              const { name, phone } = company;
              const number = phone.replace('0', '+44').replace(/\s/g, '');

              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td><a href={`tel:${number}`} className="button button--text">{phone}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Taxis;
