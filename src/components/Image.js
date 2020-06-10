import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import LoadingContext from './../context/LoadingContext';

import Blazy from 'blazy';

const Image = ({ classes, src, alt }) => {
  const { finishedLoading } = useContext(LoadingContext);

  useEffect(() => {

    if (finishedLoading) {

      // eslint-disable-next-line
      const bLazy = new Blazy({
        selector: '.image--lazy',
        successClass: 'image--loaded'
      });

    }

  }, [finishedLoading]);

  return (
    <picture className={`image${classes ? ' ' + classes : ''}`}>
      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src={src} className="image--lazy" alt={alt} />
    </picture>
  );
};

Image.propTypes = {
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Image;
