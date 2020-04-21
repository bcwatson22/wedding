import { createContext } from 'react';

const LoadingContext = createContext({
  loadingCount: 1,
  showLoading: () => {},
  closeLoading: () => {}
});

export default LoadingContext;
