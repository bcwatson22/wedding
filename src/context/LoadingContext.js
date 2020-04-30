import { createContext } from 'react';

const LoadingContext = createContext({
  loadingCount: 1,
  showLoading: () => {},
  hideLoading: () => {},
  finishedLoading: false,
  finishLoading: () => {}
});

export default LoadingContext;
