import React, { useState } from 'react';
import LoadingContext from './LoadingContext';

const LoadingProvider = ({ children }) => {
  const showLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount: prevState.loadingCount + 1,
        finishedLoading: false
      }
    })
  }

  const hideLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount:
          prevState.loadingCount > 0 ? prevState.loadingCount - 1 : 0
      }
    })
  }

  const finishLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        finishedLoading: true
      }
    })
  }

  const loadingState = {
    loadingCount: 1,
    showLoading,
    hideLoading,
    finishedLoading: false,
    finishLoading
  }

  const [loading, toggleLoading] = useState(loadingState);

  return (
    <LoadingContext.Provider value={loading}>
      { children }
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
