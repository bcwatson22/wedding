import React from 'react';
import moment from 'moment';

import Heading from './Heading';

const date = '2021-05-29';

const Date = () => {
  return (
    <section className="info__section">
      <Heading title="Date" />
      <p>The wedding is on <time dateTime={date}><strong>{moment(date).format('dddd Do MMMM YYYY')}</strong></time>.</p>
      <p>This is a <strong>bank holiday</strong> in the UK, which should hopefully give you a bit of flexibility and help to ease hectic travel arrangements.</p>
    </section>
  );
};

export default Date;
