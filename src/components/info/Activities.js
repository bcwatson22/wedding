import React from 'react';

import Image from './../Image';

import dovedale from './../../assets/images/dovedale.jpg';

const Activities = () => {
  return (
    <>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <Image classes="activities__image" src={dovedale} alt="Dovedale image" />
    </>
  );
};

export default Activities;
