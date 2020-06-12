import React from 'react';

import Heading from './Heading';

const accomodationOptions = [
  {
    name: 'YHA Ilam Hall',
    type: 'Hostel',
    phone: '0345 371 9023',
    website: 'https://www.yha.org.uk/hostel/yha-ilam-hall'
  },
  {
    name: 'Dog & Partridge',
    type: 'Inn',
    phone: '01335 343183',
    website: 'http://dogandpartridge.co.uk'
  },
  {
    name: 'Hillcrest House',
    type: 'B&B',
    phone: '-',
    website: 'https://hillcresthousedovedale.co.uk'
  },
  {
    name: 'Stanshope Hall',
    type: 'Hotel',
    phone: '01335 310278',
    website: 'http://stanshopehall.co.uk'
  },
  {
    name: 'Paddock House',
    type: 'Cottage(s)',
    phone: '07974 564829',
    website: 'https://sykescottages.co.uk/cottage/Paddock-House-961334.html'
  },
  {
    name: 'Church Farm',
    type: 'Cottage(s)',
    phone: '01335 390216',
    website: 'https://www.churchfarmholidaycottages.co.uk'
  },
  {
    name: 'Winnow Barns Holidays',
    type: 'Cottage(s)',
    phone: '01335 310271',
    website: 'https://winnowbarns.uk'
  },
  {
    name: 'Beechenhill Farm',
    type: 'Cottage(s)',
    phone: '01335 310274',
    website: 'http://beechenhill.co.uk'
  },
  {
    name: 'Garden Farm',
    type: 'B&B',
    phone: '01335 350808',
    website: 'https://gardenfarmpeakdistrict.co.uk'
  },
  {
    name: 'The Izaak Walton',
    type: 'Hotel',
    phone: '01335 350981',
    website: 'https://izaakwaltonhotel.com'
  },
  {
    name: 'Travelodge Ashbourne',
    type: 'Hotel',
    phone: '08719 846362',
    website: 'https://travelodge.co.uk/hotels/385/Ashbourne-hotel'
  },
  {
    name: 'The Orchards Ilam',
    type: 'Cottage(s)',
    phone: '07973 772538',
    website: 'https://www.cottageguide.co.uk/theorchards'
  }
];

const Accomodation = () => {
  return (
    <section class="info__section info__section--table">
      <Heading title="Accomodation" />
      <p>There's a range of accomodation options near the venue, suiting different budgets. We've noted a few here but this list isn't exhaustive.</p>
      <p>AirBnb has some decent places too: please have a look around <strong>Ilam</strong> and <strong>Hartington</strong>. The town of <strong>Ashbourne</strong> isn't too far away either.</p>
      <p>Whatever you choose though, we'd recommend <strong>booking well in advance</strong> as it's a popular tourist spot and a bank holiday - so things could get snapped up fast (especially the YHA)!</p>
      <article className="scrolling-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {accomodationOptions.map((option) => {
              const { name, type, phone, website } = option;
              const number = phone.replace('0', '+44').replace(/\s/g, '');

              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td><a href={`tel:${number}`} className="button button--text">{phone}</a></td>
                  <td><a href={website} className="button button--text" target="_blank" rel="noopener noreferrer">{website}</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default Accomodation;
