import React from 'react';
import moment from 'moment';

const date = '2022-05-14';

const Date = () => {
  return (
    <p>The wedding is on <time dateTime={date}><strong>{moment(date).format('dddd Do MMMM YYYY')}</strong></time>.</p>
  );
};

export default Date;
