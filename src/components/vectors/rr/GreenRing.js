import React, { useContext } from 'react';

import LoadingContext from './../../../context/LoadingContext';

const GreenRing = () => {
  const { finishLoading } = useContext(LoadingContext);

  return (
    <svg className="shape shape--green-ring" xmlns="http://www.w3.org/2000/svg" viewBox="0.003 0 99.994 199.998" onTransitionEnd={(e) => finishLoading()}>
      <path className="vector vector--green" d="M99.997 100.005c0 55.229-44.766 99.992-99.994 99.992V184.11c46.457 0 84.119-37.648 84.119-84.105 0-46.455-37.662-84.118-84.119-84.118V0c55.228 0 99.994 44.776 99.994 100.005" />
    </svg>
  );
};

export default GreenRing;
