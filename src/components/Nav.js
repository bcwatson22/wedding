import React from 'react';

import Link from './Link';

import { hasLocalStorage } from './../services/utils';

const Nav = () => {
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

  return (
    <nav className="nav nav--primary">
      <ul>
        {navItems.map((item) => {
          let { name } = item,
              link = name.toLowerCase(),
              image = require(`./../assets/icons/nav/${link}.svg`);

          return (
            <li key={link}>
              <Link target={link === 'home' ? '/' : `/${link}`}>
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
