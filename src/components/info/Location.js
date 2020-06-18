import React from 'react';

import Map from './Map';

const Location = () => {
  return (
    <>
      <p>It will take place at <strong>Lower Damgate Farm</strong>, near Ilam which is nestled in Dovedale; a stunning part of the Peak District. The farm is also an animal sanctuary, so you might see a random alpaca or two at some point!</p>
      <p>To <strong>find directions</strong> on an app or satnav, it's best to look for the name of the farm as its postcode will take you to Stanshope which is half a mile away. The address is:</p>
      <p translate="no" typeof="schema:PostalAddress">
        <strong property="schema:streetAddress">Lower Damgate Farm</strong>
        <strong property="schema:addressLocality">Ilam</strong>
        <strong property="schema:addressRegion">Derbyshire</strong>
        <strong property="schema:postalCode">DE6 2AD</strong>
      </p>
      <Map />
    </>
  );
};

export default Location;
