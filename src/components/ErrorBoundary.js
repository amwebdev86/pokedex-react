import React from 'react';
import Catch from './CustomErrorTracking';
//TODO: Resturcture component to original format.
const ErrorBoundary = ({ component, children }) => {
  Catch(component, (error) => {
    console.error(error);
  });
  return children;
};

ErrorBoundary.propsTypes = {
  children: React.ReactNode,
};

export default ErrorBoundary;
