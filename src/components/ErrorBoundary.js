import React from 'react';
import Catch from './CustomErrorTracking';
//TODO: Error Styling v1.0.1
export const ErrorBoundary = Catch((props, error) => {
  const node = error ? (
    <div className='error-screen'>
      <h2>Something went wrong</h2>
      <h4>{error.message}</h4>
    </div>
  ) : (
    <>{props.children}</>
  );
  return node;
});
ErrorBoundary.propsTypes = {
  children: React.ReactNode,
};
export default ErrorBoundary;
