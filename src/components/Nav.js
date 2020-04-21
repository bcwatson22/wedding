import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import LoadingContext from './../context/LoadingContext';

import Utils from './../services/Utils';

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
  const {showLoading} = useContext(LoadingContext);

  const navigateTo = (e) => {

    e.preventDefault();

    const elem = (e.target.localName === 'a') ? e.target : e.target.parentElement,
          location = elem.getAttribute('href');

    showLoading();

    Utils.delay(200).then(() => navigate(location));

  }

  return (
    <nav className="nav nav--primary">
      <ul>
        {navItems.map((item) => {
          let { name } = item,
              link = name.toLowerCase(),
              image = require(`./../assets/icons/nav/${link}.svg`);

          return (
            <li key={link}>
              <a href={link === 'home' ? '/' : `/${link}`} className="nav__button" onClick={navigateTo}>
                <img src={image} className={`icon icon--${link}`} alt={`${name} icon`} />
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
