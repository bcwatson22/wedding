import React from 'react';

import Link from './Link';

const Nav = () => {
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
