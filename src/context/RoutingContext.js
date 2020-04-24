import { createContext } from 'react';

const RoutingContext = createContext({
  routing: false,
  showRouting: () => {},
  closeRouting: () => {}
});

export default RoutingContext;
