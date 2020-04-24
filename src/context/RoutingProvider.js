import React, { useState } from 'react';
import RoutingContext from './RoutingContext';

const RoutingProvider = ({ children }) => {
  const showRouting = () => {
    toggleROuting(prevState => {
      return {
        ...prevState,
        routing: true
      }
    })
  }

  const hideRouting = () => {
    toggleROuting(prevState => {
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

  const [routing, toggleROuting] = useState(routingState)

  return (
    <RoutingContext.Provider value={routing}>
      {children}
    </RoutingContext.Provider>
  );
};

export default RoutingProvider;
