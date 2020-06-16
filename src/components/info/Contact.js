import React from 'react';

import Heading from './Heading';

const Contact = () => {
  return (
    <section className="info__section">
      <Heading title="Contact" />
      <p>Billy - <a href="tel:+447158716298" className="button button--text">07158 716298</a></p>
      <p>Becky - <a href="tel:+447817610931" className="button button--text">07817 610931</a></p>
    </section>
  );
};

export default Contact;
