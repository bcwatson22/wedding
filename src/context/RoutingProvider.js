import React, { useState } from 'react';
import RoutingContext from './RoutingContext';

const RoutingProvider = ({ children }) => {
  const showRouting = () => {
    toggleRouting(prevState => {
      return {
        ...prevState,
        routing: true
      }
    })
  }

  const hideRouting = () => {
    toggleRouting(prevState => {
      return {
        ...prevState,
        routing: false
      }
    })
  }

  const routingState = {
    routing: false,
    showRouting,
    hideRouting
  }

  const [routing, toggleRouting] = useState(routingState);

  return (
    <RoutingContext.Provider value={routing}>
      { children }
    </RoutingContext.Provider>
  );
};

export default RoutingProvider;
