import React from 'react';

import Icon from './../Icon';
import Map from './Map';

import dovedale from './../../assets/images/dovedale.jpg';

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

const Information = () => {
  return (
    <>
      <h2 className="heading--icon"><Icon file="date" folder="info" alt="Date" />Date</h2>
      <p>The wedding is on <strong>Saturday 29th May 2021</strong>.</p>
      <p>This is a <strong>bank holiday</strong> in the UK, which should hopefully give you a bit of flexibility and help to ease hectic travel arrangements.</p>
      <h2 className="heading--icon"><Icon file="location" folder="info" alt="Location" />Location</h2>
      <p>It will take place at <strong>Lower Damgate Farm</strong>, near Ilam which is nestled in Dovedale; a stunning part of the Peak District. The farm is also an animal sanctuary, so you might see a random alpaca or two at some point!</p>
      <p>To <strong>find directions</strong> on an app or satnav, it's best to look for the name of the farm as its postcode will take you to Stanshope which is half a mile away. The address is:</p>
      <p translate="no" typeof="schema:PostalAddress">
        <strong property="schema:streetAddress">Lower Damgate Farm</strong>
        <strong property="schema:addressLocality">Ilam</strong>
        <strong property="schema:addressRegion">Derbyshire</strong>
        <strong property="schema:postalCode">DE6 2AD</strong>
      </p>
      {/*<Map />*/}
      <h2 className="heading--icon"><Icon file="accomodation" folder="info" alt="Accomodation" />Accomodation</h2>
      <p>Craft beer etsy everyday carry cloud bread live-edge health goth ethical roof party microdosing sartorial. Keffiyeh crucifix literally, ennui bushwick gentrify beard snackwave quinoa. Kitsch gochujang synth portland jean shorts chia narwhal bicycle rights 8-bit. Readymade try-hard put a bird on it scenester helvetica sriracha microdosing farm-to-table meggings glossier taxidermy aesthetic. Yr messenger bag PBR&B celiac chicharrones, deep v heirloom fixie marfa microdosing vinyl copper mug sartorial cloud bread trust fund. Migas sustainable vexillologist williamsburg hexagon keytar.</p>
      <h2 className="heading--icon"><Icon file="food" folder="info" alt="Food and drinks" />Food and drinks</h2>
      <p>PBR&B bicycle rights you probably haven't heard of them, shaman hammock church-key marfa. Fanny pack pickled art party vape vexillologist fam. Raclette butcher brooklyn subway tile church-key swag paleo tattooed pabst master cleanse tumeric. Hella pinterest church-key kitsch celiac hexagon cliche, put a bird on it wolf kinfolk dreamcatcher meh roof party sartorial. Organic bicycle rights scenester tbh, truffaut locavore salvia freegan pickled put a bird on it cornhole marfa activated charcoal brooklyn.</p>
      <h2 className="heading--icon"><Icon file="parking" folder="info" alt="Parking" />Parking</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <h2 className="heading--icon"><Icon file="gifts" folder="info" alt="Gifts" />Gifts</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <h2 className="heading--icon"><Icon file="activities" folder="info" alt="Activities" />Activities</h2>
      <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
      <img src={dovedale} alt="Dovedale" />
      <h2 className="heading--icon"><Icon file="taxis" folder="info" alt="Taxis" />Taxis</h2>
      <p>Our wedding venue is in the countryside, please make sure to <strong>book taxis in advance</strong> to guarantee a ride to your accomodation. Music will <strong>finish at 11.30pm</strong>, and all guests must be off site by midnight.</p>
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
      <h2 className="heading--icon"><Icon file="contact" folder="info" alt="Contact" />Contact</h2>
      <p>Billy - <a href="tel:+447158716298" className="button button--text">07158 716298</a></p>
      <p>Becky - <a href="tel:+447817610931" className="button button--text">07817 610931</a></p>
    </>
  );
};

export default Information;
