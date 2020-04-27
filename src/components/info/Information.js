import React from 'react';

import location from './../../assets/icons/info/location.svg';
import accomodation from './../../assets/icons/info/accomodation.svg';
import parking from './../../assets/icons/info/parking.svg';
import taxis from './../../assets/icons/info/taxis.svg';
import food from './../../assets/icons/info/food-and-drinks.svg';
import gifts from './../../assets/icons/info/gifts.svg';
import activities from './../../assets/icons/info/activities.svg';
import contact from './../../assets/icons/info/contact.svg';

const Information = () => {
  const taxiCompanies = [
    {
      name: 'Ashbourne Taxis ',
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

  return (
    <>
      <h1>Info</h1>
      <h2 className="heading--icon"><img src={location} alt="Location" />Location</h2>
      <p>Helvetica literally chartreuse kale chips iceland dreamcatcher gentrify post-ironic. 3 wolf moon next level whatever pinterest. Wayfarers crucifix roof party post-ironic green juice. Fanny pack retro mlkshk street art master cleanse tousled 8-bit. Cold-pressed authentic readymade messenger bag wolf vaporware.</p>
      <h2 className="heading--icon"><img src={accomodation} alt="Accomodation" />Accomodation</h2>
      <p>Craft beer etsy everyday carry cloud bread live-edge health goth ethical roof party microdosing sartorial. Keffiyeh crucifix literally, ennui bushwick gentrify beard snackwave quinoa. Kitsch gochujang synth portland jean shorts chia narwhal bicycle rights 8-bit. Readymade try-hard put a bird on it scenester helvetica sriracha microdosing farm-to-table meggings glossier taxidermy aesthetic. Yr messenger bag PBR&B celiac chicharrones, deep v heirloom fixie marfa microdosing vinyl copper mug sartorial cloud bread trust fund. Migas sustainable vexillologist williamsburg hexagon keytar.</p>
      <h2 className="heading--icon"><img src={food} alt="Food and drinks" />Food and drinks</h2>
      <p>PBR&B bicycle rights you probably haven't heard of them, shaman hammock church-key marfa. Fanny pack pickled art party vape vexillologist fam. Raclette butcher brooklyn subway tile church-key swag paleo tattooed pabst master cleanse tumeric. Hella pinterest church-key kitsch celiac hexagon cliche, put a bird on it wolf kinfolk dreamcatcher meh roof party sartorial. Organic bicycle rights scenester tbh, truffaut locavore salvia freegan pickled put a bird on it cornhole marfa activated charcoal brooklyn.</p>
      <h2 className="heading--icon"><img src={parking} alt="Parking" />Parking</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <h2 className="heading--icon"><img src={gifts} alt="Gifts" />Gifts</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <h2 className="heading--icon"><img src={activities} alt="Activities" />Activities</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <h2 className="heading--icon"><img src={taxis} alt="Taxis" />Taxis</h2>
      <p>Our wedding venue is in the countryside, please make sure to book taxis in advance to guarantee a ride to your accomodation. Music will finish at 11.30pm, and all guests must be off site by midnight.</p>
      <article className="scrolling-table">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {taxiCompanies.map((company) => {
              let { name, phone } = company,
                  number = phone.replace('0', '+44').replace(/\s/g, '');

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
      <h2 className="heading--icon"><img src={contact} alt="Contact" />Contact</h2>
      <p>Billy - <a href="tel:+447158716298" className="button button--text">07158 716298</a></p>
      <p>Becky - <a href="tel:+447817610931" className="button button--text">07817 610931</a></p>
    </>
  );
};

export default Information;
