import React from 'react';
import PropTypes from 'prop-types';

import { scrollTo } from './../../services/utils';

const SubNav = ({ sections, refs }) => {
  return (
    <nav className="nav nav--secondary">
      <ul>
        {sections.map((item, i) => {
          const { name } = item;
          const link = name.toLowerCase().replace(/\s/g , '-');
          const image = require(`./../../assets/icons/info/${link}.svg`);

          return (
            <li key={link}>
              <button onClick={(e) => scrollTo(refs[i])}>
                <img src={image} className={`nav__icon nav__icon--${link}`} alt={`${name} icon`} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

SubNav.propTypes = {
  sections: PropTypes.array.isRequired,
  refs: PropTypes.array.isRequired
}

export default SubNav;
