import React from 'react';

import Link from './Link';

import { hasLocalStorage } from './../services/utils';

const userAdmin = hasLocalStorage() && localStorage.getItem('bb-wedding-admin') ? localStorage.getItem('bb-wedding-admin') : null;

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
    name: userAdmin ? 'Responses' : 'RSVP'
  }
];

const Nav = () => {
  return (
    <nav className="nav nav--primary">
      <ul>
        {navItems.map((item) => {
          const { name } = item;
          const link = name.toLowerCase();
          const image = require(`./../assets/icons/nav/${link}.svg`);

          return (
            <li key={link}>
              <Link target={link === 'home' ? '/' : `/${link}`}>
                <img src={image} className={`nav__icon nav__icon--${link}`} alt={`${name} icon`} />
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
