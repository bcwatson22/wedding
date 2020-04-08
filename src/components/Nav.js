import React from 'react';
import { Link } from 'gatsby';

// import home from './../assets/icons/nav/home.svg';
// import info from './../assets/icons/nav/info.svg';
// import timings from './../assets/icons/nav/clock.svg';
// import rsvp from './../assets/icons/nav/rsvp.svg';

const navItems = [
  {
    name: 'Home'
  },
  {
    name: 'Info'
  },
  {
    name: 'Timings'
  },
  {
    name: 'RSVP'
  }
];

const Nav = () => {
  return (
    <nav className="nav nav--primary">
      <ul>
        {navItems.map((item) => {
          let { name } = item,
              link = name.toLowerCase(),
              image = require(`./../assets/icons/nav/${link}.svg`);

          return (
            <li key={link}>
              <Link to={link === 'home' ? '/' : `/${link}`} className="nav__button">
                <img src={image} className={`icon icon--${link}`} alt={`${name} icon`} />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
