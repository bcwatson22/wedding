import React, { useEffect, useRef, createRef, useContext } from 'react';
import Helmet from 'react-helmet';

import RoutingContext from './../context/RoutingContext';

import Layout from './../components/Layout';
import Container from './../components/Container';
import SubNav from './../components/info/SubNav';
import Heading from './../components/info/Heading';
import Date from './../components/info/Date';
import Location from './../components/info/Location';
import Accommodation from './../components/info/Accommodation';
import Food from './../components/info/Food';
import Parking from './../components/info/Parking';
import Gifts from './../components/info/Gifts';
import Activities from './../components/info/Activities';
import Taxis from './../components/info/Taxis';
import Contact from './../components/info/Contact';

const contentSections = [
  {
    name: 'Date',
    component: <Date />
  },
  {
    name: 'Location',
    component: <Location />
  },
  {
    name: 'Accommodation',
    component: <Accommodation />,
    table: true
  },
  {
    name: 'Food and drinks',
    component: <Food />
  },
  {
    name: 'Parking',
    component: <Parking />
  },
  {
    name: 'Gifts',
    component: <Gifts />
  },
  {
    name: 'Activities',
    component: <Activities />
  },
  {
    name: 'Taxis',
    component: <Taxis />,
    table: true
  },
  {
    name: 'Contact',
    component: <Contact />
  }
];

export default ({ children, location }) => {
  const sectionRefs = useRef(contentSections.map(() => createRef()));
  const { hideRouting } = useContext(RoutingContext);

  useEffect(() => {

    hideRouting();

  }, [hideRouting]);

  return (
    <Layout pageName="info">
      <Helmet>
        <title>Info | B&B's wedding</title>
      </Helmet>
      <Container>
        <h1>Info</h1>
        <SubNav sections={contentSections} refs={sectionRefs.current} />
        <p>Here you can find details on everything you need to know about the big day.</p>
        <p>You can use the buttons above to <strong>scroll down</strong> to the various sections if your finger isn't up to it!</p>
        {contentSections.map((section, i) => {
          const { name, component, table } = section;

          return (
            <section key={name} className={`info__section${table ? ' info__section--table' : ''}`} ref={sectionRefs.current[i]}>
              <Heading title={name} />
              {component}
            </section>
          );
        })}
      </Container>
    </Layout>
  );
};
