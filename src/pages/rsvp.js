import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Utils from './../services/Utils';

import Layout from './../components/Layout';
import Container from './../components/Container';

import Greeting from './../components/rsvp/Greeting';
import Form from './../components/rsvp/Form';

const token = {
  arch: '9yLbQgnkE',
  festa: 'zUIDbD5x6M',
  tay: 'FdnRvyCAFp',
  tys: '1GNpq5bcLH'
}

const guestGreetingQuery = (shortId) => gql`
  query GuestGreeting {
    guest(query: { shortId: "${shortId}" }) {
      personal {
        nicknames
        greeting
      }
    }
  }
`

const RSVP = ({ children, location }) => {
  const { loading, error, data } = useQuery(guestGreetingQuery(token.arch));

  return (
    <>
      <Layout pageName="rsvp" loaded={!loading}>
        <Helmet>
          <title>RSVP | B&B's wedding</title>
        </Helmet>
        <Container>
          <Greeting data={data ? data.guest.personal : {}} />
          <Form />
          {/*<h1>RSVP</h1>
          <h2>Hey there {location.search.length ? `${location.search.substring(location.search.indexOf('guest=') + 1, location.search.length)}` : 'gatecrasher'}!</h2>
          <p>PBR&B bicycle rights you probably haven't heard of them, shaman hammock church-key marfa. Fanny pack pickled art party vape vexillologist fam. Raclette butcher brooklyn subway tile church-key swag paleo tattooed pabst master cleanse tumeric. Hella pinterest church-key kitsch celiac hexagon cliche, put a bird on it wolf kinfolk dreamcatcher meh roof party sartorial. Organic bicycle rights scenester tbh, truffaut locavore salvia freegan pickled put a bird on it cornhole marfa activated charcoal brooklyn.</p>
          <p>Aesthetic 8-bit tofu skateboard drinking vinegar prism. Seitan woke occupy activated charcoal, DIY yr tousled. Ethical helvetica normcore hashtag 8-bit, deep v iceland. Leggings tbh ennui succulents jianbing banjo distillery ugh +1 man bun meh knausgaard. Retro schlitz edison bulb, bitters beard sartorial kitsch raw denim taxidermy mlkshk vape. Hammock chillwave lumbersexual meggings master cleanse kogi 3 wolf moon banh mi pitchfork tumeric etsy. Wolf semiotics gastropub schlitz, gochujang affogato kitsch cray green juice neutra locavore iPhone 8-bit tousled.</p>
          <p>Pok pok tote bag cronut celiac. Artisan intelligentsia +1 portland, tumeric cloud bread keffiyeh poke occupy shaman freegan. Pour-over blue bottle small batch woke man braid dreamcatcher direct trade af hot chicken cronut ennui. Raw denim kickstarter etsy crucifix. Pop-up typewriter gastropub tilde, hell of palo santo art party narwhal tattooed keytar banjo single-origin coffee godard church-key. Echo park bushwick street art, four loko fanny pack meditation keffiyeh palo santo.</p>
          <p>Helvetica literally chartreuse kale chips iceland dreamcatcher gentrify post-ironic. 3 wolf moon next level whatever pinterest. Wayfarers crucifix roof party post-ironic green juice. Fanny pack retro mlkshk street art master cleanse tousled 8-bit. Cold-pressed authentic readymade messenger bag wolf vaporware.</p>
          <p>Craft beer etsy everyday carry cloud bread live-edge health goth ethical roof party microdosing sartorial. Keffiyeh crucifix literally, ennui bushwick gentrify beard snackwave quinoa. Kitsch gochujang synth portland jean shorts chia narwhal bicycle rights 8-bit. Readymade try-hard put a bird on it scenester helvetica sriracha microdosing farm-to-table meggings glossier taxidermy aesthetic. Yr messenger bag PBR&B celiac chicharrones, deep v heirloom fixie marfa microdosing vinyl copper mug sartorial cloud bread trust fund. Migas sustainable vexillologist williamsburg hexagon keytar.</p>*/}
        </Container>
      </Layout>
    </>
  );
};

export default RSVP;
